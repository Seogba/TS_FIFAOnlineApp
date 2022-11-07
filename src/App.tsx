import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import MaxDivision from './Component/MaxDivision';
import BottomNav from './Component/BottomNav';
import CallMetadata from './Component/CallMetadata';




function App() {
  interface data{
    accessId : string,
    nickname:string,
    level:number
  } 
  
  const [playerName , setPlayerName] = useState<string>("");
  const [playerID , setPlayerID] = useState<string>("");
  const [playerData , setPlayerData] = useState<any>();
  const [dataExist , setDataExist] = useState<boolean>(false);
  

  
  //유저의 닉네임을 통해 고유 식별자(ID) , 레벨 등을 가져온다

  const callUserData = (() => {

    axios(
      `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${playerName}`,
      {
        method: "GET",
        headers: {
          Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjM0MjA0NDM2IiwiYXV0aF9pZCI6IjIiLCJleHAiOjE2ODI4OTQ1MDMsImlhdCI6MTY2NzM0MjUwMywibmJmIjoxNjY3MzQyNTAzLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIn0.7weok3kREEL3lwxOLAHS6H-G7cMStlxQ1hVtxceuYZU"
        },
      } //개발자센터 로그인시 넥슨아이디(0403)으로 로그인 할것
    ).then((res) => {
      console.log("res.data" , res.data);
      setPlayerData(()=>res.data);
      console.log("playerData" , playerData);
      setPlayerID( playerData.accessId);
      console.log("Player ID :" , playerData.accessId);
      setDataExist((dataExist) => true);
    }).catch((err) => {
      console.log(err);
    });
  })   //useState 동기처리 필요
  



  //form 새로고침?

  return (
    <div className="App">
      <div className='search-user'>
       <input type="text" className='input-nickname'
       placeholder='닉네임' onChange={(event:React. ChangeEvent<HTMLInputElement>)=>setPlayerName(event.target.value)} />
       <button onClick={callUserData}>검색</button>
      </div>
      <div className='select-search'>
        {(dataExist) ? <MaxDivision/> : ""}
      </div>
      <div className='bottom-navigation'>
        <BottomNav />
        <CallMetadata />
      </div>
    </div>
    
  );
}

export default App;
