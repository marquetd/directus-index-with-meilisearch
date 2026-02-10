/**
 * Collection-specific computed fields configuration
 * Each entry defines a field to add and its computation logic
 */
export type ComputedFieldConfig = {
  fieldName: string;
  compute: (item: any) => any;
};

export const collectionComputedFields: Record<string, ComputedFieldConfig[]> = {
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
