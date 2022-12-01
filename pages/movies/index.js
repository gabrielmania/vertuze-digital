import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../components/Card";

export default function Movies({ initialMovies, numMovies }) {
  const [movies, setMovies] = useState(initialMovies);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setHasMore(numMovies > movies.length ? true : false);
  }, [movies]);

  const fetchData = async () => {
    const res = await fetch(
      `http://localhost:3000/api/movies?limit=9&skip=${movies.length}`
    );
    const newMovies = await res.json();
    setMovies((movies) => [...movies, ...newMovies]);
  };

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
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
          />
        ))}
      </div>
    </InfiniteScroll>
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
