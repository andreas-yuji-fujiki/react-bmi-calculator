import styled from "styled-components";

export default function FormTitle( { children } : any ){
    return(
        <StyledTitle>
            { children }
        </StyledTitle>
    )
}

const StyledTitle = styled.h1``