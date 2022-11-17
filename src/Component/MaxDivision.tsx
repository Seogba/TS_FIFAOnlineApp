import axios from "axios";
import { useEffect } from "react";
import PlayerID from "../App"

const MaxDivision = () =>{

    // useEffect(() => {
    //     if(PlayerID != undefined){
    //     axios(
    //         `https://api.nexon.co.kr/fifaonline4/v1.0/users/d08bd57d8d904bd0e8c9cffa/maxdivision`, //동기처리 실패로 인한 오류
    //         {
    //           method: "GET",
    //           headers: {
    //             Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjM0MjA0NDM2IiwiYXV0aF9pZCI6IjIiLCJleHAiOjE2ODI4OTQ1MDMsImlhdCI6MTY2NzM0MjUwMywibmJmIjoxNjY3MzQyNTAzLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIn0.7weok3kREEL3lwxOLAHS6H-G7cMStlxQ1hVtxceuYZU"
    //           },
    //         } 
    //       ).then((res) => {
    //        console.log("res data:" , res.data);
    //       }).catch((err) => {
    //         console.log(err);
    //       });}
    // },[PlayerID])

    // const searchMatchType = (playerMatchData:number[]) =>{
      
    // }


    return(
        <div>
            <h1>Player Data(Match Data) Exist!</h1>
        </div>
    )
}

export default MaxDivision;