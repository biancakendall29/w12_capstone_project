
import { useEffect, useState } from "react";
import Chart from 'react-apexcharts'

const BlackjackSessionStats = ({ session }) => {

  const [saves, setSaves] = useState()
  const [roundPoints, setRoundPoints] = useState([])
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  const [sessionState, setSessionState] = useState({
    wins: 0,
    losses: 0,
    pushes: 0,
    blackjacks: 0,
    finalPoints: 0
  })

  useEffect(() => {
    setSaves(session.saves)
  }, [session])

  useEffect(() => {
    if (saves !== undefined && saves !== null && saves.length !== 0 && saves.length !== undefined) {
      let points = [], wins = 0, losses = 0, pushes = 0, blackjacks = 0, finalPoints = 0;
      points.push(1000);
      for (let i = 0; i < saves.length; i++) {
        points.push(saves[i].playerMoney);
        if (saves[i].roundResult == "Player wins - BlackJack!") blackjacks += 1;
        if (saves[i].roundResult == "Player wins - BlackJack!"
          || saves[i].roundResult == "Player wins - dealer bust!"
          || saves[i].roundResult == "Player wins on points!") wins += 1;
        else if (saves[i].roundResult == "Dealer wins - BlackJack!"
          || saves[i].roundResult == "Dealer wins - player bust!"
          || saves[i].roundResult == "Dealer wins on points!") losses += 1;
        else if (saves[i].roundResult == "Push!"
          || saves[i].roundResult == "Push") pushes += 1;
      }
      finalPoints = saves[saves.length - 1].playerMoney;
      setSessionState({
        wins: wins,
        losses: losses,
        pushes: pushes,
        blackjacks: blackjacks,
        finalPoints: finalPoints
      })
      setRoundPoints(points);
    }

  }, [saves])

  useEffect(() => {
    let roundNums = [];
    for (let i = 0; i < roundPoints.length; i++) {
      roundNums.push(i);
    }
    setOptions({
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        background: "#fff",
        selection: { enabled: false },
        // width: '400px',
        // height: '400px',
      },
      xaxis: {
        categories: roundNums,
        title: {text:"round number"},
        
      },
      yaxis : {
        labels: {show:true,},
        title: {text:"points"},
        min:0,
        forceNiceScale:true,
      },
      tooltip: { enabled: false },
      stroke: {show:true, width: 2, colors: 'forestgreen'},
      markers: {size: 4, colors: '#fff', strokeColors:'forestgreen'}
    })
    setSeries([{
      name: "series-1",
      data: roundPoints
    }
    ])
  }, [roundPoints])




  return (
    <div className="session-stats">
      {/* <div className="session-stats-header">
        <p>header</p>
      </div> */}
        <div className="session-stats-content">
          <p>Total hands played: {sessionState.wins + sessionState.losses + sessionState.pushes}</p>
          <p>Hands won: {sessionState.wins}</p>
          <p>Hands lost: {sessionState.losses}</p>
          <p>Pushes: {sessionState.pushes}</p>
          <p>Blackjacks: {sessionState.blackjacks}</p>
        </div>         
        <div className="vl"/>
       {<Chart options={options} series={series} width={300} height={230} type="line" />}

        {/* <div className="session-stats-graph">
        </div> */}

    </div>

  )
}

export default BlackjackSessionStats;