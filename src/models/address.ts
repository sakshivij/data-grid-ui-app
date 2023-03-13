import { Geography } from "./geography";

interface Address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geography;
}

export type { Address }