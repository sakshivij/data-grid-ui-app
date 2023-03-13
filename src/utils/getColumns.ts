//import { Column, textEditor } from "react-data-grid";
import { User } from "../models/user";

/*

    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;


*/

export const getColumns = () => {

    const columns = [
        {
            key: 'id',
            name: 'ID',
            width: 80,
            resizable: true,
        },
        {
            key: 'name',
            name: 'Name',
            width: 200,
            resizable: true,
        },
        {
            key: 'username',
            name: 'UserName',
            width: 200,
            resizable: true,
        },
        {
            key: 'email',
            name: 'Email',
            width: 'max-content',
        },
    ];

    return columns;
}
