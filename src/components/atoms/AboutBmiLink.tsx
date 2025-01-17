import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function AboutBmiLink(){
    return(
        <AboutLink 
            href="https://www.msdmanuals.com/professional/multimedia/table/body-mass-index-bmi" 
            target="_blank"
        >
            About mass index (BMI) <FaExternalLinkAlt />
        </AboutLink>
    )
}

const AboutLink = styled.a`
    width: 100%;
    margin-left: 42px;
    opacity: 0.7;
`