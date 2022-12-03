import { useRouter } from "next/router";
import { useState } from "react";
import FormInput from "../../../components/FormInput";

export default function MovieEdit({ movie }) {
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
  } = movie[0];

  const [body, setBody] = useState({
    title,
    description,
    language,
    releaseDate,
    purchasePrice,
    rentPrice,
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const res = await fetch(`/api/movies/${_id}/edit`, {
      method: "PUT",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      router.push(`/movies/${_id}`);
    }
  };

  const handleChange = (evt) => {
    setBody((body) => {
      return { ...body, [evt.target.name]: evt.target.value };
    });
  };

  return (
    <div className="p-5 flex flex-col lg:flex-row w-10/12 md:w-8/12 lg:w-11/12 xl:w-9/12 2xl:w-8/12 mx-auto border rounded-lg shadow-lg my-10">
      <img className="mb-5 lg:mr-5" src={imgSrc} />
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
          name="releaseDate"
          value={body.releaseDate}
          label="Release Date"
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
        <button className="btn btn-warning btn-primary">Save!</button>
      </form>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;
  const res = await fetch(`http://localhost:3000/api/movies/${id}`);
  const data = await res.json();

  return {
    props: { movie: data },
  };
};
