import { useRouter } from "next/router";
import Details from "../../../components/Details";

export default function SeriesDetail({ series, user }) {
  const router = useRouter();

  const {
    _id,
    title,
    description,
    language,
    country,
    imgSrc,
    firstAirDate,
    purchasePrice,
    rentPrice,
  } = series;

  const deleteItem = async () => {
    const res = await fetch(`/api/series/${_id}/delete`, { method: "DELETE" });

    if (res.status === 200) {
      router.push("/series");
    }
  };

  return (
    <Details
      imgSrc={imgSrc}
      title={title}
      description={description}
      language={language}
      country={country}
      date={firstAirDate}
      purchasePrice={purchasePrice}
      rentPrice={rentPrice}
      deleteItem={deleteItem}
      href={`/series/${_id}/edit`}
      back="/series"
      user={user}
    />
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/series");
  const data = await res.json();

  const paths = data.map((series) => {
    return {
      params: { id: series._id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await fetch(`http://localhost:3000/api/series/${id}`);
  const data = await res.json();

  return {
    props: { series: data },
  };
};
