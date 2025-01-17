import styled from "styled-components";

import BmiCalculator from "../components/organisms/BmiCalculator";

export default function MainPage(){
    return(
        <MainPageContainer>
            <BmiCalculator/>
        </MainPageContainer>
    )
}

const MainPageContainer = styled.main`
    max-width: 80%;
    height: 99.99dvh;
    margin: 0 auto;
`