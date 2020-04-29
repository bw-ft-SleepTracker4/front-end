import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import BarGraph from './homepage-components/BarGraph'
import Emoji from './Emoji'

const Homepage = () => {
  const [ date, setDate ] = useState()

  // BASIC DATE FETCHER
  useEffect(() => {
    const date = new Date()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDate = `${days[date.getDay()]} - ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

    setDate(currentDate)
  }, [] )

  return(
    <HomepageContainer>
      <div className='dashHeader'>
        <h1>Welcome, user!</h1>
        <h3>{date}</h3>
      </div>
      <div className='stats'> 
        <div className='statCard'>
          <h5>Average Hours Slept</h5>
          <div className='statInfo'>
            25
          </div>
        </div>

        <div className='statCard'>
          <h5>Average Mood</h5>
          <div className='statInfo'>
            <Emoji symbol="😇" label="test emoji"/>
          </div>
        </div>
      </div>

      <div className='graphDataContainer'>
        <h1>Sleep Data</h1>
        <div className="bar-graph">
          <BarGraph />
        </div>
      </div>

      <div className='newDataContainer'>
        <h4>ENTER NEW DATA</h4>
      </div>
    </HomepageContainer>
  )
}

const HomepageContainer = styled.div`

  display: flex;
  flex-direction: column;  
  

  .dashHeader {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 5%;
    background-color: #626cf8;
    color: white;
    font-family: 'Spartan';
    
    
    h1 {
      width: 100%;
      text-align: center;
      font-size: 4rem;
    }
    h3 {
      font-size: 1.5rem;
      color: #d6d6d7;
    }
    
  }


  .stats {
    display: flex;
    justify-content: space-around;
    margin-top: 5%;

    .statCard {
      width: 45%;
      height: 300px; /* TEMP SIZE */
      background-color: #d6d6d7;
      text-align: center;
      
      h5 {
        font-size: 1.4rem;
        color: #757575;
        font-family: 'Raleway';
        padding: 5%;
      }
    }
    
  }


  .graphDataContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8% 5%;

    h1 {
      margin-right: 900px;
    }

    .bar-graph {
      padding-top: 30px;
    }
  }


  .newDataContainer {
    text-align: center;
    background-color: #7ba04b;
    width: 50%;
    align-self: center;
    color: white;
    font-family: 'Spartan';
    padding: 3%;
    cursor: pointer;
    margin-bottom: 3%;
    
    &:hover {
      background-color: #86b44b;
      
    }
  }

`


export default Homepage