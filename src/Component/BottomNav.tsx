import { useEffect } from "react";


const BottomNav = () => {

    useEffect(()=> console.log('버그입니다'))
   
      
 

    return(
        <div>
            <div className="BottomNav">
                <h2>Data based on NEXON DEVELOPERS</h2>
            </div>
        </div>
    )
};

export default BottomNav;