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

const StyledDescription = styled.p`
    /* warm colors */
    &.green{
        color: #27ae60;
    }
    &.yellow{
        color: #f39c12;
    }
    &.red{
        color: #e74c3c;
    }
`