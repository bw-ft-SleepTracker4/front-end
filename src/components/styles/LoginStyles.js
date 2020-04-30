import styled from 'styled-components'

const LoginContainer = styled.div`
background-image: url('/LoginBg.jpg');
background-repeat: no-repeat;
background-size: 100% 100%;
background-position: center;

.error{
    background-color: rgb(223, 71, 71);
    color: white;
    font-size: .8rem;
    text-align: center;
    position: absolute;
    width: 100%;
}

.contain {
display: flex;
justify-content: center;
text-align: center;
width: 100%;
height: 100vh;
font-family: 'Raleway';
font-size: .8rem;
  
    .loginForm{
        width: 50%;
        height: 60%;
        align-self: center;
        background-color: rgba(32, 32, 32, 0.401);
        display: flex;
        flex-direction: column;
        justify-content: center;
        backdrop-filter: blur(2px);
        
        h1 {
            width: 100%;
            color: white;
            font-family: 'Raleway';
            margin-bottom: 5%;
        }
        form {
            display: flex;
            flex-direction: column;
        
            .inputContainer {
                width: 100%;
                padding: 1%;
                
                input {
                    padding: 1%;
                    width: 40%;
                    
                }
            }
        }

    button {
        width: 15%;
        align-self: center;
        padding: 1%;
        border-radius: 15px;
        outline: none;
        margin-top: 1%;

            &:hover:enabled {
                background-color: black;
                color: white;
                cursor: pointer;  
            }
        }
    }
`
export default LoginContainer