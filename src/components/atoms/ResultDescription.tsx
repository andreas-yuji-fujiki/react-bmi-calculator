import styled from "styled-components";

interface descriptionProps {
    description: string
}

export default function ResultDescription( { description } : descriptionProps){
    return(
        <StyledDescription>
            { description }
        </StyledDescription>
    )
}

const StyledDescription = styled.p``