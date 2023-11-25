import { useEffect, useState } from "react";

function Jam(){
    const [times, setTime] = useState();


    
    useEffect(()=> {

        setInterval(()=>{
            const a = new Date().toLocaleTimeString();
            // console.log(times);        
            setTime(a);

        },1000)
    }, [])

    return(
        <>
        <div style={{display:"flex", justifyContent:"center",alignItems:"center", height:"100vh"}}>
            <div>
                <h1>Digital Clock</h1>
                <br />
                <h1>{times}</h1>
            </div>
        </div>
        </>
    )
}

export default Jam;