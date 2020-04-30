import styled from 'styled-components'

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
    #features {
        display: flex;
        justify-content: space-between;
        padding: 8% 5%;
        
        .ftCard{
            text-align: center;
            font-family: 'Raleway';
            background-color: #aea4da;
            filter: drop-shadow(0 3px 4px black);
            width: 28%;
            border-radius: 15px;
            padding: 5%;
            

            h4 {
                border-bottom: 1px solid grey;
                font-weight: bold;
                padding-bottom: 2%;
                color: #644ec6;
            }
            h6 {
                padding-top: 6%;
                color: #ededed;
                font-size: 1rem;
                
            }    
        }
    }
    #testimonials {
        display: flex;
        justify-content: space-between;
        padding: 8% 5%;
        
        .testify{
            width: 45%;
            display: flex;
            padding: 3%;
            filter: drop-shadow(0 3px 4px black);
            background-color: rgb(243, 240, 243);
            border-radius: 5px;
            
            .tImg {
                width: 30%;

                img{
                    border-radius: 100%;
                }   
            }
            .tInfo{
                width: 70%;
                margin-left: 3%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-family: 'Spartan';
                
                h5 {
                    color: rgb(40, 36, 83);
                    font-weight: bold;
                    
                }
                h6 {
                    color: gray;
                }
            }
        }

    }
    .ctaFooter {
        width: 100%;
        background-color: rgb(104, 43, 128);
        padding: 5%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 3%;
        
        
        h2 {
            color: white;
            font-family: 'Montserrat';
            
        }

        a {
            color: black;
            text-decoration: none;
            width: 20%;
            font-family: 'Raleway';
            margin-top: 3%;

                .ctaFooterButton {
                background-color: white;
                width: 100%;
                cursor: pointer;   
                border-radius: 10px;
                padding: 2%;
                
                &:hover {
                    background-color: #1bf895;
                    color: white;
                }
            }
        }
    }
`
export default LandingContainer