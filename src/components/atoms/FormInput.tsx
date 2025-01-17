import styled from "styled-components";
import FormInputProps from '../../types/FormInputProps'

import { FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";

export default function FormInput( { value, onChange, of } : FormInputProps ){
    return(
        <>
            {of === 'height' ?
                <InputWrapper>
                    {/* icon */}
                    <IconWrapper>
                        <GiBodyHeight/>
                    </IconWrapper>
                    {/* input */}
                    <StyledFormInput
                        placeholder="Enter your height in meters" 
                        type="number" 
                        value={value} 
                        onChange={onChange}
                    />
                </InputWrapper>
            :
                <InputWrapper>
                    {/* icon */}
                    <IconWrapper>
                        <FaWeight />
                    </IconWrapper>
                    {/* input */}
                    <StyledFormInput 
                        placeholder="Enter your weight in kilograms"
                        type="number" 
                        value={value} 
                        onChange={onChange}
                    />
                </InputWrapper>
            }
        </>
    );
};

const InputWrapper = styled.div``
const IconWrapper = styled.div``
const StyledFormInput = styled.input``