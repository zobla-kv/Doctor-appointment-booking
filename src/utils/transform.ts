export const excludeFields = <T extends object>(
  object: T,
  excludedFields: (keyof T)[]
): Partial<T> => {
  return Object.fromEntries(
    Object.entries(object).filter(
      ([key]) => !excludedFields.includes(key as keyof T)
    )
  ) as Partial<T>;
};
