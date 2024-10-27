import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseApi";

export const forexApi = createApi({
  reducerPath: "channelApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Forex"],
  endpoints: (builder) => ({
    getForexs: builder.query({
      query: (page = 1) => `forexs?page=${page}`,
      providesTags: (res) =>
        res
          ? [...res.results.map(({ id }) => ({ type: "Forex", id })), "Forex"]
          : ["Forex"],
    }),
    getForexById: builder.query({
      query: (id) => `forexs/${id}`,
      providesTags: (result, error, arg) => [{ type: "Forex", id: arg.id }],
    }),
    addForex: builder.mutation({
      query: (channel) => ({
        url: "forexs",
        method: "POST",
        body: channel,
      }),
      invalidatesTags: ["Forexs"],
    }),
    updateForex: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `forexs/${id}`,
        method: "PATCH",
        body: updates,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Forex", id: arg.id }],
    }),
    deleteForex: builder.mutation({
      query: (id) => ({
        url: `forexs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Forex", id: arg.id }],
    }),
  }),
});

export const {
  useGetForexsQuery,
  useGetForexByIdQuery,
  useAddForexMutation,
  useUpdateForexMutation,
  useDeleteForexMutation,
} = forexApi;
