
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const Game = () => {
  const[score,setScore]= useState(0);
  const [selectednumber,setSelectednumber]=useState();
  const [currentDice,setCurrentDice]= useState(1);
  const [error,setError]=useState("");
  const [showRules,setShowRules]=useState(false);

  const GenerateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
  }
  const rolldice=()=>{
      if(!selectednumber){
        setError("You have not selected any number");
        return;
      }

      setError('');
      const randomnumber=GenerateRandomNumber(1,7);
      setCurrentDice((prev)=>randomnumber);

      if(selectednumber===randomnumber){
        setScore((prev)=>prev+randomnumber);
      }
      else{
        setScore((prev)=>prev-2);
      }

      setSelectednumber(undefined);
  }

  const resetScore=()=>{
    setScore (0);
  };
  return (
    <MainContainer>
      <div className='Topsection'>
        <TotalScore score={score}/>
        <NumberSelect
        error={error}
        setError={setError}
        selectednumber={selectednumber}
        setSelectednumber={setSelectednumber}/>
      </div>
      <RollDice currentDice={currentDice}
      rolldice={rolldice}
      />
      <div className='btns'>
        <OutlineButton
        onClick={resetScore}> Reset Score</OutlineButton>
        <Button
        onClick={()=> setShowRules((prev)=>!prev)}
        >

         {showRules ?"Hide":"Show"} Rules</Button>
         
      </div>
      
      {showRules && <Rules/>}
      
      
      
    </MainContainer>
  )
}

export default Game

const MainContainer=styled.main`
  padding-top: 10px;
  .Topsection{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns{
    margin-top: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  
`;