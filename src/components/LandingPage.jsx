import React from 'react'
import { Link } from 'react-router-dom'
import LandingContainer from '../components/styles/LandingPageStyles'

const LandingPage = props => {

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
            <section id='features'>
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
            </section>
            <h3 className='ftBlock'>TESTIMONIALS</h3>
            <section id='testimonials'>
                <div className='testify'>
                    <div className='tImg'>
                        <img src={require('../assets/portraitOne.jpg')} alt='person portrait'/>
                    </div>
                    <div className='tInfo'>
                        <h5>Name</h5>
                        <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum sint ipsam vel.</h6>
                    </div>
                </div>

                <div className='testify'>
                    <div className='tImg'>
                        <img src={require('../assets/portraitTwo.jpg')} alt='person portrait'/>
                    </div>
                    <div className='tInfo'>
                        <h5>Name</h5>
                        <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum sint ipsam vel.</h6>
                    </div>
                </div>
            </section>
            <div className='ctaFooter'>
                <h2>IMPROVE YOUR SLEEP TODAY</h2>
                <Link to='/signup'><div className='ctaFooterButton'>
                    Sign Up
                </div></Link>
            </div>

        </LandingContainer>
    )
}
        
export default LandingPage