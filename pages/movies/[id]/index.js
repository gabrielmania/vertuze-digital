import Details from "../../../components/Details";
import { useRouter } from "next/router";

export default function MovieDetails({ movie, user }) {
  const router = useRouter();

  const {
    _id,
    title,
    description,
    language,
    imgSrc,
    releaseDate,
    purchasePrice,
    rentPrice,
  } = movie;

  const deleteItem = async () => {
    const res = await fetch(`/api/movies/${_id}/delete`, { method: "DELETE" });

    if (res.status === 200) {
      router.push("/movies");
    }
  };

  return (
    <Details
      id={_id}
      imgSrc={imgSrc}
      title={title}
      description={description}
      language={language}
      date={releaseDate}
      purchasePrice={purchasePrice}
      rentPrice={rentPrice}
      deleteItem={deleteItem}
      href={`/movies/${_id}/edit`}
      back="/movies"
      user={user}
    />
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}api/movies`);
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}api/movies/${id}`);
  const data = await res.json();

  return {
    props: { movie: data },
  };
};
