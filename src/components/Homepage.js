import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import BarGraph from './homepage-components/BarGraph'
import Emoji from './Emoji'

const Homepage = () => {
  const [ date, setDate ] = useState()
  const [ modalShow, setModalShow ] = useState(false)

  const showHideClass = modalShow ? 'modalContainer show' : 'modalContainer hide'

  // BASIC DATE FETCHER
  useEffect(() => {
    const date = new Date()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDate = `${days[date.getDay()]} - ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

    setDate(currentDate)
  }, [] )

  const emojiList = document.querySelectorAll('.emojiBtn')

  // HANDLERS
  const modalHandlerOpen = e => {
    setModalShow(true)
    
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

      <div onClick={modalHandlerOpen} className='newDataContainer'>
        <h4>ENTER NEW DATA</h4>
      </div>

      <div className={showHideClass}>
        <div className='modalContent'>
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
            <div onClick={mojiEventHandler} className='emojiBtn'><Emoji symbol="😕" label="angry emoji"/></div>
            <div onClick={mojiEventHandler} className='emojiBtn'><Emoji symbol="😐" label="sick emoji"/></div>
            <div onClick={mojiEventHandler} className='emojiBtn'><Emoji symbol="🙂" label="sleepy emoji"/></div>
            <div onClick={mojiEventHandler} className='emojiBtn'><Emoji symbol="😁" label="happy emoji"/></div>
          </div>
          
            <button>Submit</button>
          
        </div>
        
      </div>
    </HomepageContainer>
  )
}

// STYLED COMPONENTS //

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


  .modalContainer{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.900);
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
   
    
    .modalContent {
      background-color: rgb(166, 182, 255);
      display: flex;
      flex-direction: column; 
      align-items: center;
      padding: 5%;
      font-family: 'Spartan';
      border-radius: 10px;
      color: rgb(104, 104, 104);
      position: relative;

      .closeBtnModal{
        position: absolute;
        right: 3%;
        top: 4%;
        font-size: .8rem;
        cursor: pointer;
        
      }
      
      
      h3 {
        padding: 2% 0;
        font-size: 1.2rem;
      }
      form {
        margin-bottom: 5%;

        input {
          padding: 2%;
          font-size: .8rem;
          
        }
      }
      
      .moodsContainer {
        font-size: 2.5rem;
        width: 100%;
        display: flex;
        justify-content: center;
        

        .emojiBtn{
          margin: 2%;
          cursor: pointer;
          
          &:hover {
            opacity: 60%;
            
          }
          
          .emoji {
            margin: 15%;
          }
        }
        
      }

      button {
        margin-top: 5%;
        padding: 1% 5%;
        border-radius: 15px;
        background-color: #59d49d;
        outline: none;
        

        &:hover {
          background-color: #1fa86a;
          color: white;
        }
      }

    }
    
  }

`


export default Homepage