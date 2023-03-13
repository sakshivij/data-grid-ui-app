import { User } from "../models/user";

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
