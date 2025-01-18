import styled from "styled-components";
import { MdHealthAndSafety } from "react-icons/md";

interface ResultBmiProps {
    bmi: number;
}

export default function ResultBMI( { bmi } : ResultBmiProps ){
    return(
        <BmiWrapper>
            <IconWrapper>
                <MdHealthAndSafety/>
            </IconWrapper>
            <BmiDisplay>
                BMI: { bmi }
            </BmiDisplay>
        </BmiWrapper>
    )
}

const BmiWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;

    font-size: 20px;

    @media screen and ( max-width: 370px ){
        font-size: 16px;
    }
`
const IconWrapper = styled.span``
const BmiDisplay = styled.span``