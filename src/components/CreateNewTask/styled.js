import styled from "styled-components";

export const Container = styled.div`
max-width: 520px;
  grid-column: 1;
  grid-row: 1;


&:after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #24293f;
  margin: 24px 0;
}

@media (max-width: 768px) {
    max-width: 100%;
}

`

export const InputContainer = styled.form`
display: flex;

`

export const InputText = styled.input`
 flex: 1;
  height: 56px;
  background: #151a37;
  border: 1px solid #24293f;
  border-right: none;
  border-radius: 8px 0 0 8px;
  padding: 0 16px;
  outline: none;
  transition: 0.2s;

  font-family: "Montserrat";
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
  color: #fff;
  
    &:hover,
    &:focus {
    border-color: #7a38fe;
}
`

export const AddButton = styled.button`
width: 56px;
height: 56px;
background: #7a38fe;
border-radius: 0 8px 8px 0;
transition: 0.2s;
display: flex;
justify-content: center;
align-items: center;


&:hover{
    background: #5e21d8;
}
`