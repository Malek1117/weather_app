import React from "react";

export default function Clock ({data}){
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());

    React.useEffect(()=>{
        const ID = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);

        return ()=>{
            clearInterval(ID);
        }
    },[]);

    return (
        <h1 className="font-semibold text-lg">{data} {time}</h1>
    )
}