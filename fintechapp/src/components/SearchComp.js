import React from 'react'
import styled from 'styled-components';

const SearchBlock = styled.div`
  text-align: center;
  padding: 20px;
`;

const SearchComp = () => {
  return (
      <SearchBlock>
            <div>
              <input></input>
              <button>search</button>
            </div>
      </SearchBlock>
  );
};

export default SearchComp