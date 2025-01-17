import styled from "styled-components";

export default function FormLabel( { children } : any ){
    return(
        <StyledLabel>
            { children }
        </StyledLabel>
    )
}

const StyledLabel = styled.label``