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
                { bmi }
            </BmiDisplay>
        </BmiWrapper>
    )
}

const BmiWrapper = styled.div``
const IconWrapper = styled.span``
const BmiDisplay = styled.span``