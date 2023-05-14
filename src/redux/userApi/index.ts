import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { randomStatus } from "@/helpers";

export type User = {
  login: {
    uuid: string;
    username: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string,
    medium: string,
    thumbnail: string,
  };
  status?: number;
};

type Response = {
  results: User[],
};

export const index = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://randomuser.me/api?results=20&inc=login,name,picture,nat",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => "users",
      transformResponse: (response: Response) => response.results.map((user) =>
          ({ ...user, status: randomStatus() })),
    }),
  }),
});

export const { useGetUsersQuery } = index;
