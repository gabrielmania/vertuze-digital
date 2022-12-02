import Details from "../../components/Details";

export default function MovieDetails({ movie }) {
  const {
    title,
    description,
    language,
    imgSrc,
    releaseDate,
    purchasePrice,
    rentPrice,
  } = movie[0];

  return (
    <Details
      imgSrc={imgSrc}
      title={title}
      description={description}
      language={language}
      date={releaseDate}
      purchasePrice={purchasePrice}
      rentPrice={rentPrice}
    />
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/movies");
  const data = await res.json();

  const paths = data.map((movie) => {
    return {
      params: { id: movie._id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await fetch(`http://localhost:3000/api/movies/${id}`);
  const data = await res.json();
  
  return {
    props: { movie: data },
  };
};
