import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function AboutBmiLink(){
    return(
        <LinkWrapper>
            <AboutLink 
                href="https://www.msdmanuals.com/professional/multimedia/table/body-mass-index-bmi" 
                target="_blank"
            >
                About mass index (BMI) <FaExternalLinkAlt />
            </AboutLink>
        </LinkWrapper>
    )
}

const LinkWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const AboutLink = styled.a`
    opacity: 0.7;
`