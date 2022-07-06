
import { useEffect, useState } from "react";
import Chart from 'react-apexcharts'

const BlackjackSessionStats = ({session}) => {

  const [saves, setSaves] = useState(session.saves)
  const [roundPoints, setRoundPoints] = useState([])
  const [options, setOptions] = useState();


  useEffect(() => {
    let points = [];
    points.push(1000);
    for (let i = 0; i < 7; i++) {
      points.push(saves[i].playerMoney);
    }
    setRoundPoints(points);
    console.log(saves)
  },[saves])

  useEffect(() => {
    let roundNums = [];
    for (let i = 0; i < roundPoints.length; i++) {
        roundNums.push(i+1);
    }
    setOptions({
        xaxis: {
            categories : roundNums
        }
    })
    console.log(roundPoints);
  },[roundPoints])
  

  return (
    <>
      <p>Hello from BlackjackSessionStats</p>
      <p>Session {session.id}</p>
      {options !== undefined ? <Chart options={options} series={name:"series-1", data:{roundPoints}} type="line" width={400} height={400}/> : <></>}
      

    </>

  )
}

export default BlackjackSessionStats;