import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../components/Card";

export default function Series({ initialSeries, numSeries }) {
  const [series, setSeries] = useState(initialSeries);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await fetch(
      `http://localhost:3000/api/series?limit=9&skip=${series.length}`
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
      <div className="input-group flex justify-center">
        <input
          name="search"
          type="text"
          placeholder="Search here..."
          className="input input-bordered w-10/12 block"
          onChange={(evt) => setSearch(evt.target.value)}
        />
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
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
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 py-10 w-11/12 md:w-8/12 lg:w-11/12 mx-auto">
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
