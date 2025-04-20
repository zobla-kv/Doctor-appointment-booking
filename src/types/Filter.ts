export interface Filter {
  name: keyof FilterOptions;
  value: string;
}

export interface FilterOptions {
  specialty: string[];
  date: string[];
  time: string[];
}

export type ActiveFilters = {
  [K in keyof FilterOptions]: string | null;
};
