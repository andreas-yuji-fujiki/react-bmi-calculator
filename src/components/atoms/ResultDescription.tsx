import styled from "styled-components";

interface descriptionProps {
    description: string
    color: 'green' | 'yellow' | 'red'
}

export default function ResultDescription( { description, color } : descriptionProps){
    return(
        <StyledDescription className={color}>
            { description }
        </StyledDescription>
    )
}

const StyledDescription = styled.p``