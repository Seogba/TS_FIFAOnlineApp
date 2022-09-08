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

  
  
  const [playerName , setPlayerName] = useState<string>("잭팟풀")
  
  // useEffect(() => {
  //   axios(`https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${playerName}`).then((res)=>{
  //     console.log("res.data" , res.data.json)
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // },[playerName]);

  useEffect(()=>{
    axios({
      url: `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${playerName}`,
      method: "GET",
      headers:{
        "KeyName":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjE2Nzc5Nzk4NzciLCJhdXRoX2lkIjoiMiIsImV4cCI6MTY3ODEyMjkxNiwiaWF0IjoxNjYyNTcwOTE2LCJuYmYiOjE2NjI1NzA5MTYsInNlcnZpY2VfaWQiOiI0MzAwMTE0ODEiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4ifQ.EMMb3J8HgjFCM6Qzfg2DpbSfW0k506S4HTMgpxRYqbs"
      },
    }).then((res)=>
    {console.log("res.data: ",res.data.json)}).catch((err) =>{
      console.log(err);
    })
    },[playerName]);

//  useEffect(()=>{
//   fetch(`https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname={playerName}`).then((res) => res.json)
//  })

  return (
    <div className="App">
      <div>
      <input type="text" className='input-nickname'
      placeholder='닉네임' onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setPlayerName(event.target.value)} />
      </div>
    </div>
  );
}

export default App;
