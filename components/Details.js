import Link from "next/link";

export default function Details({
  id,
  imgSrc,
  title,
  description,
  language,
  date,
  country,
  purchasePrice,
  rentPrice,
  deleteItem,
  href,
}) {
  return (
    <div className="p-5 flex flex-col lg:flex-row w-10/12 md:w-8/12 lg:w-11/12 xl:w-9/12 2xl:w-8/12 mx-auto border rounded-lg shadow-lg my-10">
      <img className="mb-5 lg:mr-5" src={imgSrc} />
      <div>
        <h2 className="text-4xl font-bold mb-5">{title}</h2>
        <p className="mb-2">
          <span className="font-bold">Description: </span>
          {description}
        </p>
        <p className="mb-2">
          <span className="font-bold">Language: </span>
          {language}
        </p>
        {country && (
          <p className="mb-2">
            <span className="font-bold">Country: </span>
            {country}
          </p>
        )}
        <p className="mb-2">
          <span className="font-bold">Release Date: </span>
          {date}
        </p>
        <div className="flex justify-center flex-wrap lg:justify-start">
          <button className="btn btn-warning bg-primary mr-2 mt-2">
            Buy Now! Php {purchasePrice}.00
          </button>
          <button className="btn mr-2 mt-2">Rent It! Php {rentPrice}.00</button>
          <button className="btn btn-outline btn-warning mr-2 mt-2">
            Back
          </button>
          <Link href={href} className="btn btn-warning mr-2 mt-2">
            <i className="fa-solid fa-pen"></i>
          </Link>
          <button onClick={deleteItem} className="btn btn-error mt-2">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
