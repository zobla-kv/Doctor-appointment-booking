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

export const sortSpecialtiesAsc = (array: string[]): string[] => {
  return array.sort((a, b) => a.localeCompare(b));
};

export const sortDatesAsc = (array: string[]): string[] => {
  return array.sort((dateA, dateB) => {
    const [monthA, dayA] = dateA.split('.').map(Number);
    const [monthB, dayB] = dateB.split('.').map(Number);

    return monthA === monthB ? dayA - dayB : monthA - monthB;
  });
};

export const sortTimesAsc = (array: string[]): string[] => {
  return array.sort((timeA, timeB) => {
    const [hoursA, minutesA] = timeA.split(':').map(Number);
    const [hoursB, minutesB] = timeB.split(':').map(Number);

    const totalMinutesA = hoursA * 60 + minutesA;
    const totalMinutesB = hoursB * 60 + minutesB;

    return totalMinutesA - totalMinutesB;
  });
};

export const capitalize = (text: string): string => {
  if (!text) {
    return '';
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
