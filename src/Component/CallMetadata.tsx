import { useEffect } from "react"
import axios from "axios";

//참고용 컴포넌트. 최종에서 제외할 것

const CallMetadata = () =>{

    useEffect(()=>{
        axios(
            `https://static.api.nexon.co.kr/fifaonline4/latest/matchtype.json`, 
            {
              method: "GET",
              headers: {
                Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjM0MjA0NDM2IiwiYXV0aF9pZCI6IjIiLCJleHAiOjE2ODI4OTQ1MDMsImlhdCI6MTY2NzM0MjUwMywibmJmIjoxNjY3MzQyNTAzLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIn0.7weok3kREEL3lwxOLAHS6H-G7cMStlxQ1hVtxceuYZU"
              },
            } 
          ).then((res) => {
           console.log("메타데이터(매치타입) : " , res.data);
          }).catch((err) => {
            console.log(err);
          })
    })

    useEffect(()=>{
        axios(
            `https://static.api.nexon.co.kr/fifaonline4/latest/division.json`, 
            {
              method: "GET",
              headers: {
                Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjM0MjA0NDM2IiwiYXV0aF9pZCI6IjIiLCJleHAiOjE2ODI4OTQ1MDMsImlhdCI6MTY2NzM0MjUwMywibmJmIjoxNjY3MzQyNTAzLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIn0.7weok3kREEL3lwxOLAHS6H-G7cMStlxQ1hVtxceuYZU"
              },
            } 
          ).then((res) => {
           console.log("등급데이터: " , res.data);
          }).catch((err) => {
            console.log(err);
          })
    })


    return (
        <div>
            <h6>just test</h6>
        </div>
    )
}

export default CallMetadata