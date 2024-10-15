import { createApi } from "@reduxjs/toolkit/query/react";

import baseQueryWithReauth from "./baseApi";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getThreeSixFiveDatas: builder.query({
      query: (page = 1) => `infos?page=${page}`,
      providesTags: (res) =>
        res
          ? [...res.results.map(({ id }) => ({ type: "Infos", id })), "Infos"]
          : ["Infos"],
    }),
    getThreeSixFiveById: builder.query({
      query: (id) => `infos/${id}`,
      providesTags: (result, error, id) => [{ type: "Task", id: id }],
    }),
    addThreeSixFive: builder.mutation({
      query: (data) => ({
        url: "infos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Infos"],
    }),
    updateThreeSixFive: builder.mutation({
      query: (updates) => {
        const { id, FormData } = updates;
        return {
          url: `Infos/${id}`,
          method: "PATCH",
          body: FormData,
        };
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Task", id }],
    }),
    deleteThreeSixFive: builder.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Task", id }],
    }),

    // getTasksFilterByDate: builder.query({
    //   query: (argu) => {
    //     // const { startDate = "05-08-2024", endDate = "05-12-2024" } = argu;
    //     const { startDate, endDate } = argu;
    //     let queryString = `tasks/filterByStatus?startDate=${startDate}&endDate=${endDate}`;
    //     return queryString;
    //   },
    //   providesTags: ["Task"],
    // }),
    // getTasksFilterActivateDate: builder.query({
    //   query: (argu) => {
    //     // const { startDate = "05-08-2024", endDate = "05-12-2024" } = argu;
    //     const { startDate, endDate } = argu;
    //     let queryString = `tasks/filterByActivateDate?startDate=${startDate}&endDate=${endDate}`;
    //     return queryString;
    //   },
    //   providesTags: ["Task"],
    // }),
  }),
});

export const {
  useGetThreeSixFiveDatasQuery,
  useGetThreeSixFiveByIdQuery,
  useAddThreeSixFiveMutation,
  useUpdateThreeSixFiveMutation,
  useDeleteThreeSixFiveMutation,
} = taskApi;
