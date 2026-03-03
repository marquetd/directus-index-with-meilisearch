import { Job, Person } from "./types";

/**
 * Collection-specific computed fields configuration
 * Each entry defines a field to add and its computation logic
 */
export type ComputedFieldConfig = {
  fieldName: string;
  compute: (item: any) => any;
};

export const collectionComputedFields: Record<string, ComputedFieldConfig[]> = {
  abstract: [
    {
      fieldName: "speaker",
      compute: (item) => {
        const authors = item.authors ?? [];
        const speaker = authors.find((i: any) => i.speaker);
        return speaker ? speaker.firstName + " " + speaker.lastName : null;
      },
    },
  ],
  person: [
    {
      fieldName: "isExpert",
      compute: (item) =>
        Array.isArray(item.expertiseDomains) &&
        item.expertiseDomains.length > 0,
    },
    {
      fieldName: "inOffice",
      compute: (item) => {
        const jobs = item.jobs ?? [];
        return jobs.some((i: any) => !i.endDate);
      },
    },
    {
      fieldName: "lastJob",
      compute: (item: Person) => {
        const jobs = item.jobs ? (item.jobs as Job[]) : [];
        if (jobs.length === 0) return null;
        const lastJob = jobs.reduce((prev: Job | null, current: Job) => {
          if (!prev) {
            return current;
          }
          if (current.endDate && prev.endDate) {
            return new Date(current.endDate) > new Date(prev.endDate)
              ? current
              : prev;
          }
          if (!current.endDate && prev.endDate) {
            return current;
          }
          return prev;
        }, null);
        return lastJob;
      },
    },
  ],
  mainevent: [
    {
      fieldName: "year",
      compute: (item) => {
        if (item.startDate) {
          const date = new Date(item.startDate);
          return date.getFullYear();
        }
        return null;
      },
    },
  ],
};

/**
 * Get computed field names for a collection
 */
export const getComputedFieldNames = (collectionName: string): string[] => {
  const config = collectionComputedFields[collectionName.toLowerCase()];
  if (!config) return [];
  return config.map((field) => field.fieldName);
};

/**
 * Apply computed fields to items
 * @returns Array of applied field names, or empty array if none
 */
export const applyComputedFields = (
  items: any[],
  collectionName: string,
): string[] => {
  const config = collectionComputedFields[collectionName.toLowerCase()];
  if (!config || config.length === 0) return [];

  items.forEach((item) => {
    config.forEach(({ fieldName, compute }) => {
      item[fieldName] = compute(item);
    });
  });

  return config.map((f) => f.fieldName);
};
