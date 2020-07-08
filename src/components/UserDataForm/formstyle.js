import styled from 'styled-components';


export const InputDiv = styled.div`
  font-size :12px;
  color:red;
  margin :1rem auto;
  input {
    padding : 8px;
    width :100%;
    border : 0.2px solid #f1f1f1;
  }
  textarea{
        padding : 8px;
        width :100%;
        height:8rem;
        border : 0.2px solid #f1f1f1;
  }
` ;

export const Labels = styled.label`
    width :100%;
    &::after{
      content:' *';
      color:red;
    }
` ;
export const SmallDiv = styled.div`
    font-size:12px;
    color:black;
`;

export const Successbtn = styled.button`
    width:100%;
    padding:25px;
    background-color: #2ebc4f;
    color:white;
    border:none;
    border-radius:12px;
    outline:none;
    cursor:pointer;
    margin:2rem auto;
    &:disabled{
        background-color:lightgreen;
        cursor:default;
    }
    
` ;
