import { Address } from "./address";
import { Company } from "./company";

interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export type { User }