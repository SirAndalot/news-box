import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Card from './component/Card';
import './component/card.css';

const  App = ()=> {


  const[article,setArticle] =useState();
  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines/", {
        params: {
          country: "us",
          apiKey:process.env.REACT_APP_API_KEY || "6976bd474c4c475ab3ed5cd237b6d61a",
          pageSize: 2
        }
      })
      .then(result => {
        setArticle(result.data?.articles?.[1])
      })
      .catch(err => {
        console.log(err);
      });
  },[])


  

  return (
    <div className='App'>
{
  article &&
  
  <Card
      article = {article}
      />
}
    </div>
  );

}


export default App;
