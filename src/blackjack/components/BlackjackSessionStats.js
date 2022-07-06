
import { useEffect, useState } from "react";
import Chart from 'react-apexcharts'

const BlackjackSessionStats = ({session}) => {

  const [saves, setSaves] = useState(session.saves)
  const [roundPoints, setRoundPoints] = useState([])
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  const [sessionState, setSessionState] = useState({
    wins : 0,
    losses : 0,
    pushes : 0,
    blackjacks : 0,
    finalPoints : 0
  })

  useEffect(() => {
    let points = [], wins, losses, pushes, blackjacks, finalPoints;
    points.push(1000);
    for (let i = 0; i < saves.length; i++) {
      points.push(saves[i].playerMoney);
      if (saves[i].roundResult === "Player wins - BlackJack!" 
          || saves[i].roundResult === "Player wins - dealer bust!" 
          || saves[i].roundResult === "Player wins on points!") wins += 1;
      else if (saves[i].roundResult === "Dealer wins - BlackJack!" 
          || saves[i].roundResult === "Dealer wins - player bust!" 
          || saves[i].roundResult === "Dealer wins on points!") losses += 1;
      else if (saves[i].roundResult === "Push!" 
          || saves[i].roundResult === "Push") pushes += 1;

      if (saves[i].roundResults ===  "Player wins - BlackJack!" ) blackjacks += 1;
    }
    //finalPoints += saves[-1].playerMoney;
    setSessionState({
      wins: wins,
      losses: losses,
      pushes: pushes,
      blackjacks: blackjacks,
      finalPoints: finalPoints
    })
    setRoundPoints(points);
    // console.log(saves)
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
    // console.log(roundPoints);
  },[roundPoints])
  



  return (
    <div  className="session-stats">
      <p>{session.id}</p>
      {<Chart options={options} series={series} type="line" width={400} height={400}/>}

    </div>

  )
}

export default BlackjackSessionStats;