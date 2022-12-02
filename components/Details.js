export default function Details({
  imgSrc,
  title,
  description,
  language,
  date,
  country,
  purchasePrice,
  rentPrice,
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
        <p className="mb-2">
          <span className="font-bold">Purchase Price: </span>Php {purchasePrice}
          .00
        </p>
        <p className="mb-2">
          <span className="font-bold">Rent Price: </span>Php {rentPrice}.00
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="btn btn-warning bg-primary mr-2">Buy Now!</button>
          <button className="btn mr-2">Rent It!</button>
          <button className="btn btn-outline btn-warning">Back</button>
        </div>
      </div>
    </div>
  );
}
