import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseApi";

const OPTION_POPULATE_QUERY = "?populate=company";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page = 1) => `users${OPTION_POPULATE_QUERY}&page=${page}`,
      providesTags: (res) =>
        res
          ? [...res.results.map(({ id }) => ({ type: "User", id })), "User"]
          : ["User"],
    }),
    getAllUsers: builder.query({
      query: () => "users/get-all",
      providesTags: ["User"],
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
      providesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: updates,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
    invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
  }),
});

export const {
  useGetUsersQuery,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
