import styled from 'styled-components'

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
      text-align: center;
      width: 100%;
      font-size: 1.5rem;
      color: #d6d6d7;
    }
    h5 {
      width: 100%;
      font-size: .8rem;
      color: #d6d6d7;
      text-align: center;
      margin-top: 1%;
      font-style: italic;
    }
    h6 {
      width: 100%;
      font-size: .8rem;
      color: white;
      text-align: center;
      margin-top: .5%;
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

      .statInfo {
        font-size: 6rem;
        color: #7ba04b;
        font-family: 'Montserrat';
        
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
      font-family: 'Raleway';
      color: grey;
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

export default HomepageContainer