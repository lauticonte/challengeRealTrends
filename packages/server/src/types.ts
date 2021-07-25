export interface Pokemon {
  name: string;
  types: string[];
  image: string;
  id: number;
}

export interface Vote {
  user: string;
  pokemon: Pokemon["id"];
  review?: string;
}
