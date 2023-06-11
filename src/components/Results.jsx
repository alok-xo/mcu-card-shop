import React from 'react'
import "../styles/Result.css";

export const Results = ( {result} ) => {
  return <div className='search-result'>{result.name}</div>;
};

