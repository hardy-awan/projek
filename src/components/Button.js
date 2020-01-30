import styled from 'styled-components';

export const Linkurl = styled.text`
    color : var(--mainDark);
    &:hover{
        color: var(--mainRed);
    }
` ;

export const Linkurl1 = styled.text`
    color : var(--mainDark);
    
` ;

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1rem;
    background:var(--mainRed);
    color : var(--mainWhite);
    border-radius: 25px;
    
    &:hover{
        background: var(--mainRed);
        color: var(--mainWhite);
        border-color : var(--mainRed);
    }
` ;


export const ButtonContainer1 = styled.button`
    text-transform: capitalize;
    font-size: 1rem;
    background:var(--mainRed);
    color : var(--mainWhite);
    border-radius: 40px;
    border : transparent;
   
    &:hover{
        background: var(--mainRed);
        color: var(--mainWhite);
    }
` ;