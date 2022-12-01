import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../components/Card";

export default function Series({ initialSeries, numSeries }) {
  const [series, setSeries] = useState(initialSeries);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setHasMore(numSeries > series.length ? true : false);
  }, [series]);

  const fetchData = async () => {
    const res = await fetch(
      `http://localhost:3000/api/series?limit=9&skip=${series.length}`
    );
    const newSeries = await res.json();
    setSeries((series) => [...series, ...newSeries]);
    console.log(series);
  };

  return (
    <InfiniteScroll
      dataLength={series.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 py-10 w-11/12 md:w-8/12 lg:w-11/12 mx-auto">
        {series.map((s, i) => (
          <Card
            key={i}
            title={s.title}
            id={s._id}
            imgSrc={s.imgSrc}
            description={s.description}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http:localhost:3000/api/series?limit=9");
  const data = await res.json();

  const getNumSeries = await fetch("http:localhost:3000/api/movies/count");
  const numSeries = await getNumSeries.json();

  return {
    props: {
      initialSeries: JSON.parse(JSON.stringify(data)),
      numSeries,
    },
  };
};
