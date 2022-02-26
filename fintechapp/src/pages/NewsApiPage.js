import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import SearchComp from '../components/SearchComp';
import NewsList from '../components/NewsList';


const NewsApiPage = () => {

    const [searchText, setSearchText] = useState("");      //데이터를 저장할 공간
    const [searchResult, setSearchResult] = useState([]);  //검색 결과를 저장할 공간 (배열 형식으로 받아옴)

    const handleSearchTextChange = () => {
        //input 변경사항을 searchText로 반영
    };

    const handleSearchButtonClick = () => {
        //axios를 통해 newsList 요청하기
    };

    return (
        <div>
            <Header title="NEWS SEARCHING 🔍"></Header>
            <br></br><br></br>
            <SearchComp handleChange={handleSearchTextChange} handleClick={handleSearchButtonClick}></SearchComp>
            <br></br><br></br>
            
            <NewsList searchResultList={searchResult}></NewsList>
        </div>
    );
};

export default NewsApiPage;