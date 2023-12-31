import styled from "styled-components";

export const Container = styled.div`
  max-width: 520px;
  grid-column: 2;
  grid-row: 1;
  align-self: end;
  overflow: hidden;
  &:after{
    content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #24293f;
  margin: 24px 0;
}

@media (max-width: 768px) {
  max-width: 100%;
  grid-column: 1;
  grid-row: 3;
}
`

export const Input = styled.input`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  accent-color: #fb40df;
  box-shadow: 0px 0px 12px 4px rgba(251, 64, 229, 0.25);
  transition: 0.8s;
`

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;

  span{  font-family: "Roboto";
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
  color: #fff;
  font-family: "Montserrat";}
`

export const Message = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(64, 251, 114, 0.25);
  border: 1px solid #40fb72;
  border-radius: 8px;
  padding: 16px;
  max-width: 324px;
  height: 80px;
  margin: 24px auto 32px;
  animation: fadeInDown 0.8s;
  span{
    font-family: "Roboto";
  font-size: 1rem;
  line-height: 150%;
  font-weight: 700;
  color: #fff;
  font-family: "Montserrat";
  }

`