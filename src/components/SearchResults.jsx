import React from "react";
import "../styles/SearchResult.css";
import { Results } from "../components/Results";


const SearchResults = ({ results }) => {
  return (
      <div className="results-list">
        {results.map((result, id) => {
          return <Results result={result} key={id} />;
        })}
      </div>
  );
};

export default SearchResults;
