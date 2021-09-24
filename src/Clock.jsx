import React,{useState} from "react";

function Clock(props){

    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      
    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const [day, setDay] = useState();

    const timeHandle = () => {
        setTime(new Date().toLocaleTimeString());
        setDate(new Date().toLocaleDateString());
        setDay(new Date().getDay());
      };
      setInterval(timeHandle, 1000);
      return(
          <>
             <p>
            {date} <span>{days[day]}</span>
          </p>
          <h1>{time}</h1>
          </>
      )
}

export default Clock; 