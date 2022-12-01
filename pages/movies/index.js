import Link from "next/link";

export default function Movies({ movies }) {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 py-10 w-11/12 md:w-8/12 lg:w-11/12 mx-auto">
      {movies.map((movie) => (
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={movie.imgSrc} alt={movie.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <p>{movie.description}</p>
            <div className="card-actions justify-center">
              <Link
                href={`/movies/${movie._id}`}
                className="btn btn-warning bg-primary"
              >
                View Detail
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http:localhost:3000/api/movies");
  const data = await res.json();
  return {
    props: {
      movies: JSON.parse(JSON.stringify(data)),
    },
  };
};
