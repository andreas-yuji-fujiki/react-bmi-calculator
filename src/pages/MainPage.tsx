import styled from "styled-components";
import AsideImage from "../components/atoms/AsideImage";

export default function MainPage(){
    return(
        <MainPageContainer>
            <AsideImage/>
        </MainPageContainer>
    )
}

const MainPageContainer = styled.main`
    max-width: 80%;
    width: 100%;
    height: 99.99dvh;

    margin: 0 auto;
`