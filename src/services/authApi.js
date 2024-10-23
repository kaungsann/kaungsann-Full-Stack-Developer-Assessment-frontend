import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseApi";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "auth/register",
        method: "POST",
        body: credentials,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: (refreshToken) => ({
        url: "auth/logout",
        method: "POST",
        body: { refreshToken },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authApi;
