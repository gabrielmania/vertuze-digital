import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../components/Card";

export default function Movies({ initialMovies, numMovies }) {
  const [movies, setMovies] = useState(initialMovies);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await fetch(
      `http://localhost:3000/api/movies?limit=9&skip=${movies.length}`
    );
    const newMovies = await res.json();
    setMovies((movies) => [...movies, ...newMovies]);
  };

  const searchMovies = async () => {
    const res = await fetch(`http://localhost:3000/api/movies?q=${search}`);
    const searchedMovies = await res.json();
    search === ""
      ? setMovies([...initialMovies])
      : setMovies([...searchedMovies]);
  };

  useEffect(() => {
    searchMovies();
  }, [search]);

  useEffect(() => {
    setHasMore(numMovies > movies.length ? true : false);
  }, [movies]);

  return (
    <div className="py-10">
      <div className="input-group flex justify-center">
        <input
          name="search"
          type="text"
          placeholder="Search here..."
          className="input input-bordered w-10/12 block"
          onChange={(evt) => setSearch(evt.target.value)}
        />
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <InfiniteScroll
        dataLength={movies.length}
        next={search === "" && fetchData}
        hasMore={search === "" ? hasMore : false}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>
              {search === "" ? "Yay! You have seen it all" : "End of results"}
            </b>
          </p>
        }
      >
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 py-10 w-11/12 md:w-8/12 lg:w-11/12 mx-auto">
          {movies.map((movie, i) => (
            <Card
              key={i}
              title={movie.title}
              id={movie._id}
              imgSrc={movie.imgSrc}
              description={movie.description}
              href={`/movies/${movie._id}`}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http:localhost:3000/api/movies?limit=9");
  const data = await res.json();
  const getNumMovies = await fetch("http:localhost:3000/api/movies/count");
  const numMovies = await getNumMovies.json();

  return {
    props: {
      initialMovies: JSON.parse(JSON.stringify(data)),
      numMovies,
    },
  };
};
