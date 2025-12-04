import { config } from "dotenv";
import fs from "fs";
import path from "path";
import { Client } from "ssh2";

config();

const { SSH_HOST, SSH_PORT, SSH_USER, SSH_PASSWORD, SSH_DIRECTORY } =
  process.env;

if (!SSH_HOST || !SSH_USER || !SSH_PASSWORD || !SSH_DIRECTORY) {
  console.error(
    "Missing required environment variables: SSH_HOST, SSH_USER, SSH_PASSWORD, SSH_DIRECTORY"
  );
  process.exit(1);
}

const conn = new Client();

const uploadFile = (sftp, localPath, remotePath) => {
  return new Promise((resolve, reject) => {
    sftp.fastPut(localPath, remotePath, (err) => {
      if (err) reject(err);
      else {
        console.log(`Uploaded: ${localPath} -> ${remotePath}`);
        resolve();
      }
    });
  });
};

const ensureRemoteDir = (sftp, dirPath) => {
  return new Promise((resolve, reject) => {
    sftp.mkdir(dirPath, (err) => {
      if (err && err.code !== 4) {
        // code 4 = directory already exists
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const uploadDirectory = async (sftp, localDir, remoteDir) => {
  await ensureRemoteDir(sftp, remoteDir);

  const files = fs.readdirSync(localDir);
  for (const file of files) {
    const localPath = path.join(localDir, file);
    const remotePath = `${remoteDir}/${file}`;
    const stat = fs.statSync(localPath);

    if (stat.isDirectory()) {
      await uploadDirectory(sftp, localPath, remotePath);
    } else {
      await uploadFile(sftp, localPath, remotePath);
    }
  }
};

conn
  .on("ready", () => {
    console.log("SSH Connection established");

    conn.sftp(async (err, sftp) => {
      if (err) {
        console.error("SFTP error:", err);
        conn.end();
        process.exit(1);
      }

      try {
        // Ensure remote directory exists
        await ensureRemoteDir(sftp, SSH_DIRECTORY);

        // Upload package.json
        await uploadFile(sftp, "package.json", `${SSH_DIRECTORY}/package.json`);

        // Upload dist folder
        await uploadDirectory(sftp, "dist", `${SSH_DIRECTORY}/dist`);

        console.log("Upload completed successfully!");
      } catch (error) {
        console.error("Upload error:", error);
        process.exit(1);
      } finally {
        conn.end();
      }
    });
  })
  .on("error", (err) => {
    console.error("SSH Connection error:", err);
    process.exit(1);
  })
  .connect({
    host: SSH_HOST,
    port: parseInt(SSH_PORT || "22", 10),
    username: SSH_USER,
    password: SSH_PASSWORD,
  });
