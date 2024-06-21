
import styled from "styled-components";
const NumberSelect = ({setError,
  error,
  selectednumber,
  setSelectednumber}) => {
  const arrNumber=[1,2,3,4,5,6];
  
  const numberSelectorHandler=(value)=>{
    setSelectednumber(value);
    setError('');
  }
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
      {
        arrNumber.map((value,i)=>( 
        <Box 
        isSelected={value===selectednumber}
        key={i}
        onClick={()=>
          numberSelectorHandler(value)}>
            {value}
            </Box>))
      }
  
      </div>
      <p> Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelect;

const NumberSelectorContainer= styled.div`
  display: flex;
  flex-direction:column;
  align-items: end;

  
  .flex{
    display: flex;
    gap: 20px;
  }
  p{
    font-size: 20px;
    font-weight: 700px;

  }
  .error{
    color: red;
  }
`;

const Box= styled.div`
      height: 60px;
      width: 60px;
      font-size: 20px;
      font-weight:700;
      display: grid;
      place-items: center;
      border: 1px solid black;
      background-color: ${(props)=>(props.isSelected?"black":"white")};
      color: ${(props)=>(props.isSelected?"white":"black")};
`;