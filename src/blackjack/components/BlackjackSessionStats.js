
import { useEffect, useState } from "react";
import Chart from 'react-apexcharts'

const BlackjackSessionStats = ({session}) => {

  const [saves, setSaves] = useState(session.saves)
  const [roundPoints, setRoundPoints] = useState([])
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);


  useEffect(() => {
    let points = [];
    points.push(1000);
    for (let i = 0; i < saves.length; i++) {
      points.push(saves[i].playerMoney);
    }
    setRoundPoints(points);
    console.log(saves)
  },[saves])

  useEffect(() => {
    let roundNums = [];
    for (let i = 0; i < roundPoints.length; i++) {
        roundNums.push(i);
    }
    setOptions({
        chart: {
            toolbar: {show:false},
            zoom: {enabled:false},
            background: "#fff",
            selection: {enabled:false},
        },
        xaxis: {
            categories : roundNums
        },
        tooltip : {enabled: false}
    })
    setSeries([{
        name:"series-1",
        data:roundPoints
    }

    ])
    console.log(roundPoints);
  },[roundPoints])
  

  return (
    <div  className="session-stats">
      <p>Hello from BlackjackSessionStats</p>
      <p>Session {session.id}</p>
      {<Chart options={options} series={series} type="line" width={400} height={400}/>}

    </div>

  )
}

export default BlackjackSessionStats;