import styled from "styled-components";

export const Container = styled.li`
 max-width: 520px;
    height: 56px;
    border-radius: 8px;
    padding: 0 16px;
    position: relative;
    animation: fadeInDown 0.8s;
  
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      max-width: 100%;
  }
`

export const InputCheckbox = styled.input`
    display: none;
`

export const CustomCheckbox = styled.div`
    width: 32px;
    height: 32px;
    background: #060b28;
    border-radius: 50%;
    cursor: pointer;
  
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CustomCheckboxChecked = styled.div`
 width: 24px;
    height: 24px;
    background: #2f5aff;
    border-radius: 50%;
  
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TaskName = styled.span`
flex: 1;
    margin-left: 12px;
  
    font-family: "Roboto";
    font-size: 1rem;
    line-height: 150%;
    font-weight: 400;
    color: #fff;
    font-family: "Montserrat";
`

export const TrashButton = styled.button `
 height: 100%;
    background: none;
    outline: none;
  
    display: flex;
    justify-content: center;
    align-items: center;
  
  
  & > svg > path {
    transition: 0.2s;
  }
  
  &:hover > svg > path,
  &:focus > svg > path {
    fill: #ff334c;
  }
`