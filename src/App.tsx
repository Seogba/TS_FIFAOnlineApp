import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'




function App() {
  interface data{
    accessId : string,
    nickname:string,
    level:number
  } 
  
  const [playerName , setPlayerName] = useState<string>("");
  const [playerData , setPlayerData] = useState<any>([]);
  const [dataExist , setDataExist] = useState<boolean>(false);
  

  //유저의 닉네임을 통해 고유 식별자 , 레벨 등을 가져온다

  const callUserData = (() => {
    axios(
      `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${playerName}`,
      {
        method: "GET",
        headers: {
          Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6Ijk0MDE1OTM4MSIsImF1dGhfaWQiOiIyIiwiZXhwIjoxNjc4MzcyMTg0LCJpYXQiOjE2NjI4MjAxODQsIm5iZiI6MTY2MjgyMDE4NCwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9.leauru723Bw7SKcQPlwbXUibcT280fU3u2YLm9R8Cjc"
        },
      }
    ).then((res) => {
      console.log("res.data" , res.data);
      setPlayerData(res.data);
      setDataExist(true);
    }).catch((err) => {
      console.log(err);
    });
  })

  

  return (
    <div className="App">
      <div className='search-user'>
      <input type="text" className='input-nickname'
      placeholder='닉네임' onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setPlayerName(event.target.value)} />
      <button onClick={callUserData}>검색</button>
      </div>
      <div className='user-data'></div>
    </div>
  );
}

export default App;
