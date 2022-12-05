import { useRouter } from "next/router";
import Details from "../../../components/Details";
import Series from "../../../models/series";
import connectDb from "../../../utils/connectDb";

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

// export const getStaticPaths = async () => {
//   // const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}api/series`);
//   // const data = await res.json();
//   connectDb();
//   const series = await Series.find();

//   const paths = series.map((series) => {
//     return {
//       params: { id: series._id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (ctx) => {
  connectDb();
  const { id } = ctx.params;
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_HOST_URL}api/series/${id}`
  // );
  // const data = await res.json();
  const series = await Series.findOne({ _id: id });

  return {
    props: { series: JSON.parse(JSON.stringify(series)) },
  };
};
