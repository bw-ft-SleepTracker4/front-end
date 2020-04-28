import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Homepage = props => {

    return (
        <LandingContainer>
            <div className='landingImageContainer'>
                <div className='cta'>
                    <h3>Lorem, ipsum dolor sit Amet</h3>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias quia obcaecati aliquid expedita tempora enim excepturi, unde asperiores consectetur? In, cum assumenda minima tempora vero totam provident perferendis labore.</h5>
                </div>
                <Link to='/signup'><div className='ctaButton'>
                    Sign Up
                </div></Link>
                <img src={require('../assets/landingImg.jpg')} alt='stars' />
            </div>
            <h3 className='ftBlock'>FEATURES</h3>
            <div className='features'>
                <div className='ftCard'>
                    <h4>Title</h4>
                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, necessitatibus!</h6>
                </div>

                <div className='ftCard'>
                    <h4>Title</h4>
                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, necessitatibus!</h6>
                </div>

                <div className='ftCard'>
                    <h4>Title</h4>
                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, necessitatibus!</h6>
                </div>
            </div>
        </LandingContainer>
    )
}

const LandingContainer = styled.div`
    width: 100%;
    padding: 0 5%;
    
    .landingImageContainer {
        width: 100%;
        height: 80vh;

        img {
            object-fit: fill;
            width: 100%;
            height: 100%;            
        }
        .cta {
            position: absolute; 
            background-color: rgba(26, 26, 26, 0.573);       
            width: 40%;
            padding: 5%;
            text-align: center;
            color: white;
            top: 25%;
            left: 15%;
            backdrop-filter: blur(4px);
            
        }
        .ctaButton {
            position: absolute;
            background-color: #1bf895;
            width: 10%;
            text-align: center;
            padding: 1%;
            border-radius: 20px;
            right: 20%;
            top: 45%;
            outline: none;
            cursor: pointer;
            color: #5e5e5e;
            text-decoration: none;
            font-family: 'Raleway';
            font-weight: bold;
            
            
            &:hover {
                background-color: #76f9be; 
            }
        }
        
    }
    .ftBlock {
            background-color: black;
            color: white;
            font-family: 'Raleway';
            padding: 1% 3%;
            
        }
    .features {
        display: flex;
        justify-content: space-between;
        padding: 3% 5%;
        
        

        .ftCard{
            text-align: center;
            font-family: 'Raleway';
            
            

            h4 {
                border-bottom: 1px solid grey;
                font-weight: bold;
                padding-bottom: 2%;
            }
            h6 {
                padding-top: 6%;
            }
            width: 28%;
            border: 2px solid black;
            padding: 3%;
            
        }
    }
`

export default Homepage