import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseApi";

export const channelApi = createApi({
  reducerPath: "channelApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Channel"],
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: (page = 1) => `channels?page=${page}`,
      providesTags: (res) =>
        res
          ? [
              ...res.results.map(({ id }) => ({ type: "Channel", id })),
              "Channel",
            ]
          : ["Channel"],
    }),
    getChannelsById: builder.query({
      query: (id) => `channels/${id}`,
      providesTags: (result, error, arg) => [{ type: "Channel", id: arg.id }],
    }),
    addChannel: builder.mutation({
      query: (channel) => ({
        url: "channels",
        method: "POST",
        body: channel,
      }),
      invalidatesTags: ["Channel"],
    }),
    updateChannel: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `forexs/${id}`,
        method: "PATCH",
        body: updates,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Channel", id: arg.id },
      ],
    }),
    deleteChannel: builder.mutation({
      query: (id) => ({
        url: `channels/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "ForChannelex", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetChannelsQuery,
  useGetChannelsByIdQuery,
  useAddChannelMutation,
  useUpdateChannelMutation,
  useDeleteChannelMutation,
} = channelApi;
