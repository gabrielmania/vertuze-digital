export default function SeriesDetail({ series }) {
  const {
    title,
    description,
    language,
    country,
    imgSrc,
    firstAirDate,
    purchasePrice,
    rentPrice,
  } = series[0];
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
        <p className="mb-2">
          <span className="font-bold">Country: </span>
          {language}
        </p>
        <p className="mb-2">
          <span className="font-bold">First Air Date: </span>
          {firstAirDate}
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
