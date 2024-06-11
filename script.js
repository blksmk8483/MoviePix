const options3 = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5Nzk1OWNmMzM0N2MxYmVjZmU0ODQ3NzNmODliNCIsInN1YiI6IjY2NjdiNzE2OTE0Yjg4OTA3YWU5ZWZkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TVs4E2FC6H2_ax1pesVaqnQn8AkrY2GNMLdb63JSFmQ",
  },
};

fetch(
  "https://api.themoviedb.org/3/search/movie?query=Marvel%20Endgame&include_adult=false&language=en-US&page=1",
  options3
)
  .then((response) => response.json())
  .then((data) =>
    // console.log("OPTIONS 3", .results["0"].original_title)
    // console.log("OPTIONS 3", ...[data.results["0"]])
    console.log("OPTIONS 3", data.results[0], data.results[0].poster_path)
  )
  .catch((err) => console.error(err));
