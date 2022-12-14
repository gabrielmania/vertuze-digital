import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import FormInput from "../../../components/FormInput";
import connectDb from "../../../utils/connectDb";
import Series from "../../../models/series";
import Image from "next/image";

export default function SeriesEdit({ seriesData }) {
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
  } = seriesData;

  const [body, setBody] = useState({
    title,
    description,
    language,
    country,
    firstAirDate,
    purchasePrice,
    rentPrice,
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const res = await fetch(`/api/series/${_id}/edit`, {
      method: "PUT",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      router.push(`/series/${_id}`);
    }
  };

  const handleChange = (evt) => {
    setBody((body) => {
      return { ...body, [evt.target.name]: evt.target.value };
    });
  };

  return (
    <div className="p-5 flex flex-col lg:flex-row w-10/12 md:w-8/12 lg:w-11/12 xl:w-9/12 2xl:w-8/12 mx-auto border rounded-lg shadow-lg my-10">
      <Image
        className="mb-5 lg:mb-0 lg:mr-5"
        src={imgSrc}
        alt={body.title}
        width={500}
        height={500}
      />
      <form onSubmit={handleSubmit} className="w-full">
        <FormInput
          name="title"
          value={body.title}
          label="Title"
          handleChange={handleChange}
          type="text"
        />
        <FormInput
          name="description"
          value={body.description}
          label="Description"
          handleChange={handleChange}
          type="text"
        />
        <FormInput
          name="language"
          value={body.language}
          label="Language"
          handleChange={handleChange}
          type="text"
        />
        <FormInput
          name="country"
          value={body.country}
          label="Country"
          handleChange={handleChange}
          type="text"
        />
        <FormInput
          name="firstAirDate"
          value={body.firstAirDate}
          label="First Air Date"
          handleChange={handleChange}
          type="text"
        />
        <FormInput
          name="purchasePrice"
          value={body.purchasePrice}
          label="Purchase Price"
          handleChange={handleChange}
          type="text"
        />
        <FormInput
          name="rentPrice"
          value={body.rentPrice}
          label="Rent Price"
          handleChange={handleChange}
          type="text"
        />
        <div className="mt-5">
          <button className="btn btn-warning bg-primary mr-2">Save!</button>
          <Link href={`/series/${_id}`} className="btn btn-error">
            Cancel
          </Link>
        </div>
      </form>
    </div>
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
  const seriesData = await Series.findOne({ _id: id });

  return {
    props: { seriesData: JSON.parse(JSON.stringify(seriesData)) },
  };
};
