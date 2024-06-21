import styled from "styled-components"

const RollDice = ({rolldice,currentDice}) => {

  return (
    <DiceContainer>
        
        <div className="dice"
        onClick={rolldice}
        >
            <img src={`/images/dice_${currentDice}.png`} alt="dice1"/>

            
            <p>Click on the Dice to Roll </p>
            
        </div>
        
        
    </DiceContainer>
  )
}

export default RollDice
 const DiceContainer= styled.div`
    display: flex;
    margin-top:30px;
    align-items: center;
    flex-direction: column;
    

    p{
        font-size: 16px;
        align-items: center;
        text-align: center;
    }
    .dice{
        cursor: pointer;
    }
`;