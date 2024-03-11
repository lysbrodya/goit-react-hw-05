import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getTranding = async () => {
  const response = await axios.get("/trending/movie/week", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWQ3YmNiMjYxNmVlMDA4ODBlNmFmNDJlYWIxZmI5ZiIsInN1YiI6IjY1ZWRmNWExYzE1YjU1MDE4NmYzMzA3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cds96AwqsiIWlMrJlp9co9FobbivCruvPh9FOGIusbI",
    },
  });
  return response.data.results;
};

export const getSearchMovies = async (searchQuery) => {
  const response = await axios.get("/search/movie", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWQ3YmNiMjYxNmVlMDA4ODBlNmFmNDJlYWIxZmI5ZiIsInN1YiI6IjY1ZWRmNWExYzE1YjU1MDE4NmYzMzA3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cds96AwqsiIWlMrJlp9co9FobbivCruvPh9FOGIusbI",
    },
    params: { query: searchQuery },
  });
  return response.data.results;
};
