import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseApi";

export const forexApi = createApi({
  reducerPath: "forexApi", // Unique name for the API slice
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Forex"],
  endpoints: (builder) => ({
    // Fetch all Forex items (Read)
    getForexs: builder.query({
      query: (page = 1) => `forexs?page=${page}`, // API call to fetch Forex data
      providesTags: (res) =>
        res?.results
          ? [...res.results.map(({ id }) => ({ type: "Forex", id })), "Forex"]
          : ["Forex"],
    }),

    // Fetch a single Forex item by ID (Read)
    getForexById: builder.query({
      query: (id) => `forexs/${id}`, // API call to fetch a single Forex item
      providesTags: (result, error, id) => [{ type: "Forex", id }],
    }),

    // Add a new Forex item (Create)
    addForex: builder.mutation({
      query: (newForex) => ({
        url: "forexs",
        method: "POST",
        body: newForex,
      }),
      invalidatesTags: ["Forex"], // Invalidate the Forex tag to refetch the list
    }),

    // Update an existing Forex item (Update)
    updateForex: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `forexs/${id}`,
        method: "PATCH",
        body: updates,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Forex", id }],
    }),

    // Delete a Forex item (Delete)
    deleteForex: builder.mutation({
      query: (id) => ({
        url: `forexs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Forex", id }], // Invalidate the deleted Forex item
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
