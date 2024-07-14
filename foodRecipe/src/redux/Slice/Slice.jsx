import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = 'https://tasty.p.rapidapi.com/';
// const headers = {
//   'x-rapidapi-key': '21f955141cmshf78e6e9b036eb86p12c2d6jsn5d40e03c8aac',
//   'x-rapidapi-host': 'tasty.p.rapidapi.com'
// };

const RecipeApi = createApi({
  reducerPath: 'RecipeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', '21f955141cmshf78e6e9b036eb86p12c2d6jsn5d40e03c8aac');
      headers.set('x-rapidapi-host', 'tasty.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getRecipe: builder.query({
      query: () => 'recipes/list?from=0&size=40&tags=under_30_minutes'
    })
  })
});

export const { useGetRecipeQuery } = RecipeApi; 
export { RecipeApi };
