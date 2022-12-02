export default function SearchBar({ setSearch }) {
  return (
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
  );
}
