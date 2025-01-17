import styled from "styled-components";

export default function FormTitle( { children } : any ){
    return(
        <StyledTitle>
            { children }
        </StyledTitle>
    )
}

const StyledTitle = styled.h1`
    position: relative;
    text-align: center;
    font-size: 1.9rem;
    font-weight: 600;
    padding-bottom: 15px;

    &::after{
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        border-bottom: 1px solid #27ae60;
        width: 100%;
        position: absolute;
    }
`