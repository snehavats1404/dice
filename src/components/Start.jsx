import styled from 'styled-components';
import { Button } from '../styled/Button';

const Start = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src='/images/dices 1.png'/>
        </div>
        <div className='content'>
            <h1 >DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default Start



const Container= styled.div`
    max-width:500px;
    display: flex;
    margin:auto;
    height:100vh;
    align-items: center;
    justify-content: center;
    .content{
    h1{
        font-size:96px;
        white-space: nowrap;
        
    }
}
    
`;

