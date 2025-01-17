import styled from "styled-components";
import FormInputProps from '../../types/FormInputProps'

import { GiWeight } from "react-icons/gi";
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
                        type="number" 
                        value={value} 
                        onChange={onChange}
                    />
                </InputWrapper>
            :
                <InputWrapper>
                    {/* icon */}
                    <IconWrapper>
                        <GiWeight />
                    </IconWrapper>
                    {/* input */}
                    <StyledFormInput
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