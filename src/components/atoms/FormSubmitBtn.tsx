import styled from "styled-components";

export default function FormSubmitBtn(){
    return(
        <StyledSubmitBtn type="submit">
            Calculate BMI
        </StyledSubmitBtn>
    )
}

const StyledSubmitBtn = styled.button`
    width: 100%;
    background-color: #27ae60;
    padding: 10px 0;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;

    &:hover{
        opacity: 0.9;
    }
`