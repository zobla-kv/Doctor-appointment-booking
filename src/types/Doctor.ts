export interface Doctor {
  name: string;
  photo: string;
  specialty: string;
  availability: Availability[];
  location: string;
  rating: number;
}

interface Availability {
  date: string;
  times: string[];
}
