import styled from "styled-components";

import AsideImage from "../components/atoms/AsideImage";
import BmiCalculator from "../components/organisms/BmiCalculator";

export default function MainPage(){
    return(
        <MainPageContainer>
            <AsideImage/>
            <BmiCalculator/>
        </MainPageContainer>
    )
}

const MainPageContainer = styled.main`
    position: relative;

    max-width: 67%;
    height: 99.99dvh;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 910px){
        max-width: 100%;
    }
    @media screen and (max-width: 1190px){
        justify-content: space-between;
        max-width: 75%;
    }
`