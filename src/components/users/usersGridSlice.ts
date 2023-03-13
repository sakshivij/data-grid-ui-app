import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../../models/user'
export const usersGridSlice = createApi({
  reducerPath: 'usersSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
  }),
})
export const { useGetUsersQuery } = usersGridSlice