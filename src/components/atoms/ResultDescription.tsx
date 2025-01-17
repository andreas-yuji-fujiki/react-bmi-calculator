import styled from "styled-components";

interface descriptionProps {
    description: string
    descriptionColor: 'green' | 'yellow' | 'red'
}

export default function ResultDescription( { description, descriptionColor } : descriptionProps){
    return(
        <StyledDescription className={descriptionColor}>
            { description }
        </StyledDescription>
    )
}

const StyledDescription = styled.p``