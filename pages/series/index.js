import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";

export default function Series({ initialSeries, numSeries }) {
  const [series, setSeries] = useState(initialSeries);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await fetch(
      `http://localhost:3000/api/series?limit=10&skip=${series.length}`
    );
    const newSeries = await res.json();
    setSeries((series) => [...series, ...newSeries]);
    console.log(series);
  };

  const searchSeries = async () => {
    const res = await fetch(`http://localhost:3000/api/series?q=${search}`);
    const searchedSeries = await res.json();
    search === ""
      ? setSeries([...initialSeries])
      : setSeries([...searchedSeries]);
  };

  useEffect(() => {
    searchSeries();
  }, [search]);

  useEffect(() => {
    setHasMore(numSeries > series.length ? true : false);
  }, [series]);

  return (
    <div className="py-10">
      <SearchBar setSearch={setSearch} />
      <InfiniteScroll
        dataLength={series.length}
        next={search === "" && fetchData}
        hasMore={search === "" ? hasMore : false}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>
              {search === "" ? "Yay! You have seen it all" : "End of results"}
            </b>
          </p>
        }
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 py-10 w-11/12 mx-auto">
          {series.map((s, i) => (
            <Card
              key={i}
              title={s.title}
              id={s._id}
              imgSrc={s.imgSrc}
              description={s.description}
              href={`/series/${s._id}`}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http:localhost:3000/api/series?limit=10");
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
