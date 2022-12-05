import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import connectDb from "../../utils/connectDb";
import Series from "../../models/series";

export default function SeriesPage({ initialSeries, numSeries }) {
  const [seriesList, setSeries] = useState(initialSeries);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}api/series?limit=10&skip=${seriesList.length}`
    );
    const newSeries = await res.json();
    setSeries((seriesList) => [...seriesList, ...newSeries]);
  };

  const searchSeries = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}api/series?q=${search}`
    );
    const searchedSeries = await res.json();
    search === ""
      ? setSeries([...initialSeries])
      : setSeries([...searchedSeries]);
  };

  useEffect(() => {
    searchSeries();
  }, [search]);

  useEffect(() => {
    setHasMore(numSeries > seriesList.length ? true : false);
  }, [seriesList]);

  return (
    <div className="py-10">
      <SearchBar setSearch={setSearch} />
      <InfiniteScroll
        dataLength={seriesList.length}
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
          {seriesList.map((s, i) => (
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

export const getServerSideProps = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_HOST_URL}api/series?limit=10`
  // );
  // const data = await res.json();
  // const getNumSeries = await fetch(
  //   `${process.env.NEXT_PUBLIC_HOST_URL}api/movies/count`
  // );
  // const numSeries = await getNumSeries.json();
  connectDb();
  const series = await Series.find().limit(10);
  const numSeries = (await Series.find()).length;

  return {
    props: {
      initialSeries: JSON.parse(JSON.stringify(series)),
      numSeries,
    },
  };
};
