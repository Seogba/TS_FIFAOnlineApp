import { useEffect } from "react"
import axios from "axios";
import {
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from "@tanstack/react-query";
  import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//참고용 컴포넌트. 최종에서 제외할 것



const CallMetadata = () =>{

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

   const {isLoading , error , data} = useQuery({
    queryKey: ['metaData_1'],
    queryFn: () => fetch(
      `https://static.api.nexon.co.kr/fifaonline4/latest/matchtype.json`, 
      {
        method: "GET",
        headers: {
          Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjM0MjA0NDM2IiwiYXV0aF9pZCI6IjIiLCJleHAiOjE2ODI4OTQ1MDMsImlhdCI6MTY2NzM0MjUwMywibmJmIjoxNjY3MzQyNTAzLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIn0.7weok3kREEL3lwxOLAHS6H-G7cMStlxQ1hVtxceuYZU"
        },
      } 
    ).then((res) => res.json())
   })

   if (isLoading){
    return 'Loading,,,'
   }

   if(error){
    return 'error: ' 
   }


    // useEffect(()=>{
    //     axios(
    //         `https://static.api.nexon.co.kr/fifaonline4/latest/division.json`, 
    //         {
    //           method: "GET",
    //           headers: {
    //             Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjM0MjA0NDM2IiwiYXV0aF9pZCI6IjIiLCJleHAiOjE2ODI4OTQ1MDMsImlhdCI6MTY2NzM0MjUwMywibmJmIjoxNjY3MzQyNTAzLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIn0.7weok3kREEL3lwxOLAHS6H-G7cMStlxQ1hVtxceuYZU"
    //           },
    //         } 
    //       ).then((res) => {
    //        console.log("등급데이터: " , res.data);
    //       }).catch((err) => {
    //         console.log(err);
    //       })
    // })


    return (
      <QueryClientProvider client={queryClient}>
        <div>
            {data.map((item:any) => (
              <div key={item.id}>
                <li>{item.matchtype}</li>
              </div>
            ))}
        </div>
        </QueryClientProvider>
    )
}

export default CallMetadata