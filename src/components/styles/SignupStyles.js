import styled from 'styled-components'

const SignupContainer = styled.div`
  background-image: url('/SignupBg.jpg');
  background-size: 100% 100%;
  
  .contain {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100vh;
    font-family: 'Raleway';
    font-size: .8rem;
    
    .signupForm{
      width: 50%;
      height: 60%;
      align-self: center;
      background-color: rgba(26, 26, 26, 0.581);
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
export default SignupContainer