import {Pokemon} from "~/app/pokemon/types";

export interface Vote {
  user: string;
  pokemon: Pokemon["id"];
  review?: string;
}
