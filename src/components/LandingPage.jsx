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
                    <h4>Sleep Tracking</h4>
                    <h6>Keep track of your sleeping schedule any time, in the convenience of your PC or mobile phone.</h6>
                </div>

                <div className='ftCard'>
                    <h4>Analytical Data</h4>
                    <h6>As you track your progress, get access to a more visual representation of your sleeping habits.</h6>
                </div>

                <div className='ftCard'>
                    <h4>Mood Tracking</h4>
                    <h6>Keep track of your daily mood and get mood averages weekly.</h6>
                </div>
            </section>
            <h3 className='ftBlock'>TESTIMONIALS</h3>
            <section id='testimonials'>
                <div className='testify'>
                    <div className='tImg'>
                        <img src={require('../assets/portraitOne.jpg')} alt='person portrait'/>
                    </div>
                    <div className='tInfo'>
                        <h5>Jamie</h5>
                        <h6>I use SleepTracker to help me stay consistent with my sleeping routine. I love that it's easy to use and helps me stay on top of things.</h6>
                    </div>
                </div>

                <div className='testify'>
                    <div className='tImg'>
                        <img src={require('../assets/portraitTwo.jpg')} alt='person portrait'/>
                    </div>
                    <div className='tInfo'>
                        <h5>Henry</h5>
                        <h6>I'm not the most organized person and the sound of keeping track of my sleep schedule sounded tedious. I'm glad I stumbled upon SleepTracker because it takes out the tedious part of tracking my sleep. I immediately signed up and my sleeping routine has never been better.</h6>
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