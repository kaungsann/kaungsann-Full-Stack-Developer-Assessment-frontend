import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./baseApi";

const CHANNEL_POPULATE_QUERY = "?populate=created_by";

export const channelApi = createApi({
  reducerPath: "channelApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Channel"],
  endpoints: (builder) => ({
    // Retrieve a list of channels with pagination
    getChannels: builder.query({
      query: (page = 1) => `channels${CHANNEL_POPULATE_QUERY}&page=${page}`,
      providesTags: (res) =>
        res
          ? [
              ...res.results.map(({ id }) => ({ type: "Channel", id })),
              "Channel",
            ]
          : ["Channel"],
    }),

    // Retrieve a channel by ID
    getChannelsById: builder.query({
      query: (id) => `channels/${id}`,
      providesTags: (result, error, arg) => [{ type: "Channel", id: arg }],
    }),

    // Add a new channel
    addChannel: builder.mutation({
      query: (channel) => ({
        url: "channels",
        method: "POST",
        body: channel,
      }),
      invalidatesTags: [{ type: "Channel" }],
    }),

    // Update an existing channel
    updateChannel: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `channels/${id}`,
        method: "PATCH",
        body: updates,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Channel", id: arg.id },
      ],
    }),

    // Delete a channel
    deleteChannel: builder.mutation({
      query: (id) => ({
        url: `channels/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Channel", id: arg }],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetChannelsQuery,
  useGetChannelsByIdQuery,
  useAddChannelMutation,
  useUpdateChannelMutation,
  useDeleteChannelMutation,
} = channelApi;
