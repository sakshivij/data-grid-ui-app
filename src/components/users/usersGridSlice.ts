import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../../models/user'
export const usersGridSlice = createApi({
  reducerPath: 'usersSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
  }),
})
export const { useGetUsersQuery } = usersGridSlice