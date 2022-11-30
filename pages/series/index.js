export default function Series({ series }) {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 py-10 w-11/12 md:w-8/12 lg:w-11/12 mx-auto">
      {series.map((s) => (
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={s.imgSrc} alt={s.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{s.title}</h2>
            <p>{s.description}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-warning bg-primary">
                View Detail
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http:localhost:3000/api/series");
  const data = await res.json();
  return {
    props: {
      series: JSON.parse(JSON.stringify(data)),
    },
  };
};
