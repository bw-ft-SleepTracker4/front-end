import React, { useState, useEffect, useRef } from 'react'
import BarGraph from './homepage-components/BarGraph'
import averages from '../mock_data/averages'
import styled from 'styled-components'
import Emoji from './Emoji'
import axios from 'axios'
import { TweenMax, Power3 } from 'gsap'
import HomepageContainer from '../components/styles/HomepageStyle'

const Homepage = () => {
  const [ date, setDate ] = useState()
  const [ modalShow, setModalShow ] = useState(false)
  const [ quoteOfTheDay, setQuoteOfTheDay ] = useState([])
  let modalCont = useRef(null)


  useEffect(() => {
    axios.get('http://quotes.rest/qod.json')
      .then ( r => {
        setQuoteOfTheDay(r.data.contents.quotes[0]);
        
      })
      .catch( err => {
        console.log(err);
        
      })
  },[])
        
  const showHideClass = modalShow ? 'modalContainer show' : 'modalContainer hide'

  // BASIC DATE FETCHER
  useEffect(() => {
    const date = new Date()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDate = `${days[date.getDay()]} - ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

    setDate(currentDate)
  }, [] )

  // Calculating Emoji for Average Mood
  const averageMoodData = averages.map(mood => mood['mood'])
  let averageMood = 0
  averageMoodData.forEach(mood => {
    averageMood += mood / 10
  })

  const moodToEmoji = mood => {
    switch(mood) {
      case 1:
        return <Emoji symbol="☹️" label="sad emoji"/>
      case 2:
        return <Emoji symbol="😕" label="kinda sad emoji"/>
      case 3:
        return <Emoji symbol="😐" label="ok emoji"/>
      case 4: 
        return <Emoji symbol="🙂" label="kinda happy emoji"/>
      case 5:
        return <Emoji symbol="😁" label="happy emoji"/>
      default:
        return 'no mood set yet!'
    }
  }

  // Calculating Number for Average Hours Slept
  const averageSleepData = averages.map(sleep => sleep['sleep_hours'])
  let averageSleep = 0
  averageSleepData.forEach(hour => {
    averageSleep += hour / 10 
  })

  const emojiList = document.querySelectorAll('.emojiBtn')

  // HANDLERS
  const modalHandlerOpen = e => {
    setModalShow(true)
    TweenMax.from(
      modalCont, .8, {opacity: 0, y: 300, ease: Power3.easeInOut}
    )
  }
  const modalHandlerClose = e => {
    setModalShow(false)
    emojiList.forEach( elem => {
      elem.classList.remove('active')
    })
    
  }
  const mojiEventHandler = e => {
   
    emojiList.forEach( elem => {
      elem.classList.remove('active')
    })
    e.currentTarget.classList.add('active');
    
  }

  // ONCLICK OUTSIDE MODAL, CLOSE MODAL
  window.onclick = function(e) {
    const modal = document.querySelector('.modalContainer')
    if (e.target === modal) {
      setModalShow(false)
    }
  }

  return(
    <HomepageContainer>
      <div className='dashHeader'>
        <h1>Welcome, user!</h1>
        <h3>{date}</h3>
        {/* <h5>{quoteOfTheDay.quote}</h5>
        <h6>{quoteOfTheDay.author}</h6> */}

        {/* IN CASE API LOCKED OUT */}
        <h5>I am an optimist. It does not seem too much use being anything else....</h5> 
        <h6>- Winston Churchill</h6>

      </div>
      <div className='stats'> 
        <div className='statCard'>
          <h5>Average Hours Slept</h5>
          <div className='statInfo'>
            {Math.floor(averageSleep)}
          </div>
        </div>

        <div className='statCard'>
          <h5>Average Mood</h5>
          <div className='statInfo'>
            {moodToEmoji(Math.floor(averageMood))}
          </div>
        </div>
      </div>

      <div className='graphDataContainer'>
        <h1>Sleep Data</h1>
        <div className="bar-graph">
          <BarGraph />
        </div>
      </div>

      <div onClick={modalHandlerOpen} className='newDataContainer'>
        <h4>ENTER NEW DATA</h4>
      </div>

      <div className={showHideClass}>
        <div className='modalContent' ref={ e => {modalCont = e}}>
          <span className='closeBtnModal' onClick={modalHandlerClose}>
          <Emoji symbol="❌" label="close emoji"/>
          </span>
          <h3>How many hours did you sleep last night?</h3>
          <form>
            <label><input 
              type='text'
            ></input></label>
          </form>
          <h3>How are you feeling?</h3>
          <div className='moodsContainer'>
            <div onClick={mojiEventHandler} className='emojiBtn'><Emoji symbol="☹️" label="sad emoji"/></div>
            <div onClick={mojiEventHandler} className='emojiBtn'><Emoji symbol="😕" label="kinda sad emoji"/></div>
            <div onClick={mojiEventHandler} className='emojiBtn'><Emoji symbol="😐" label="ok emoji"/></div>
            <div onClick={mojiEventHandler} className='emojiBtn'><Emoji symbol="🙂" label="kinda happy emoji"/></div>
            <div onClick={mojiEventHandler} className='emojiBtn'><Emoji symbol="😁" label="happy emoji"/></div>
          </div>
          
            <button onClick={modalHandlerClose}>Submit</button>
          
        </div>
      </div>
    </HomepageContainer>
  )
}

export default Homepage