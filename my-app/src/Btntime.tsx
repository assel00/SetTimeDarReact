import React,{useState} from "react";

export default function Btntime(){
    const[time,Newtime]=useState<string>()

     function btnClickHandler1() {

        Newtime(new Date().toISOString());

    };

    function btnClickHandler2(){
        Newtime('  ')
    };

    return(
        <center>
            <h2>{time}</h2>
            <button onClick={btnClickHandler1}>Show time</button>
            <button onClick={btnClickHandler2}>Hide</button>
        </center>
    );}

