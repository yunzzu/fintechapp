import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import SearchComp from '../components/SearchComp';
import NewsList from '../components/NewsList';


const NewsApiPage = () => {
    return (
        <div>
            <Header title="NEWS SEARCHING 🔍"></Header>
            <br></br><br></br>
            <SearchComp></SearchComp>
            <br></br><br></br>
            
            <NewsList></NewsList>
        </div>
    );
};

export default NewsApiPage;