import styled from "styled-components";

import ResultBMI from "../atoms/ResultBMI";
import ResultDescription from "../atoms/ResultDescription";
import AboutBmiLink from "../atoms/AboutBmiLink";

import ResultBoxProps from "../../types/ResultBoxProps";

export default function ResultBox( { bmi, description, descriptionColor, isVisible } : ResultBoxProps ){
    return(
        <ResultWrapper className={ isVisible ? 'visible' : 'hidden' }>
            {/* BMI result display & description */}
            <ResultInfoWrapper>
                <ResultBMI bmi={bmi} />
                <ResultDescription description={description} descriptionColor={descriptionColor}/>
            </ResultInfoWrapper>

            {/* about link */}
            <AboutBmiLink/>
        </ResultWrapper>
    )
}

const ResultWrapper = styled.div`
    /* visibility states */
    &.visible{
        display: block;
    }
    &.hidden{
        display: none;
    }
`

const ResultInfoWrapper = styled.div``