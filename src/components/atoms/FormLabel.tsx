import styled from "styled-components";

export default function FormLabel( { children } : any ){
    return(
        <StyledLabel>
            { children }
        </StyledLabel>
    )
}

const StyledLabel = styled.label`
    font-size: 17px;
    opacity: 0.8;
`