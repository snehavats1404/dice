import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div >
            <ul className='text'>
                <li>
                    Select any number
                </li>
                <li>Click on the dice image</li>
                <li>After you click on the 
                    dice if selected number is 
                    same as on the dice, you will 
                    get same point as the dice{" "}</li>
                <li>If you get wrong guess then 2 points wil be deducted from your total score

                </li>
            </ul>

        </div>

    </RulesContainer>
  )
}

export default Rules

const RulesContainer= styled.div`
    max-width: 400px;
    margin: 0 auto;
    margin-right: 40px;
    margin-bottom: 40px;
    border-radius: 10px;
    background-color: #FBF1F1;
    padding: 20px;
    h2{
        font-size: 24px;
        text-align: center;
        
    }
    .text{
        margin-top: 10px;
        
    }


`;