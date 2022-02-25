import React from 'react'
import Header from '../components/Header'
import axios from 'axios';

const AxiosTest = () => {
    const handleClick = () => {
        console.log("click");
        axios
            .get("https://newsapi.org/v2/everything?q=카카오&from=2022-01-25&sortBy=publishedAt&apiKey=19005b69c6b94ff28147f3437450d9f2&language=ko") //axios를 통해 naver.com에 get방식으로 데이터 요청
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });
    };

  return (
    <div>
        <Header title="Axios Test" />
        <button onClick={handleClick}>데이터 요청</button>
    </div>
  )
}

export default AxiosTest