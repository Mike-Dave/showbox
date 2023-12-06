const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjUyNjg3YTExNzRhMGRhYWM3ODUxYWI0YTdkZDAzMCIsInN1YiI6IjY1NGQxNjk3Mjg2NmZhMTA4ZGMzZTNhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DfEYDnbxHmN78CHi94hN0-2ulU-Ufs3gkXzRmFJOmjM",
  },
};

export async function movieData(query, pageParam = 1) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${pageParam}&append_to_response=reviews`,
      options
    );

    if (!response.ok) {
      // Check for errors and handle them if the response is not okay
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();
 
    return data.results;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
    // throw error; // You can choose to rethrow the error or handle it differently
  }
}

export async function movieInfo(id) {
  const response1 = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );

  if (!response1.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response1.status}`);
  }

  // Parse the response as JSON
  const data1 = await response1.json();
  const response2 = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  if (!response2.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response2.status}`);
  }
  const data2 = await response2.json();
  return { data1, data2 };
}

export async function movieThriller(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  // Check if data.Response is "False" and throw an error
  if (data.Response === "False") {
    throw new Error("No video found.");
  }
  return data.results;
}

export async function trending(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();
  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }
  return data;
}

export async function popular(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();
  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }
  return data;
}

export async function all(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?language=en-US&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }
  return data;
}

export async function action(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }
  return data;
}
export async function adventure(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=12&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}

export async function animation(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }
  return data;
}

export async function comedy(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
  // throw error; // You can choose to rethrow the error or handle it differently
}

export async function crime(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}

export async function documentary(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}

export async function drama(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}
export async function family(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10751&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}

export async function fantansy(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=14&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}
export async function history(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=36&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}

export async function horror(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}
export async function music(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10402&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}
export async function mystery(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=9648&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}
export async function romance(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}
export async function scienceFiction(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=878&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}
export async function tvMovie(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10770&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}
export async function thriller(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=53&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}
export async function war(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10752&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}
export async function western(pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=37&page=${pageParam}`,
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }

  return data;
}
export async function movies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc",
    options
  );

  if (!response.ok) {
    // Check for errors and handle them if the response is not okay
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response as JSON
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("No Movie found.");
  }
  return data.results;
}

/*
{
  "genres": [
  
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
}
*/
