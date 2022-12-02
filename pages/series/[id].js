import Details from "../../components/Details";

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
    <Details
      imgSrc={imgSrc}
      title={title}
      description={description}
      language={language}
      country={country}
      date={firstAirDate}
      purchasePrice={purchasePrice}
      rentPrice={rentPrice}
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
