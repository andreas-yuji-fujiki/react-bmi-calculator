import styled from "styled-components"

export default function AsideImage(){
    return(
        <StyledAsideImage src="images/aside-image.png"/>
    )
}

const StyledAsideImage = styled.img`
    height: 425px;
    object-fit: contain;

    @media screen and (max-width: 890px){
        display: none;
    }
`