import styled from "styled-components";
import FormInputProps from '../../types/FormInputProps'

import { GiWeight } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";

export default function FormInput( { of, value, onChange, onKeyDown  } : FormInputProps ){
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
                        placeholder="Height in centimeters"
                        type="number" 
                        value={value} 
                        onChange={onChange}
                        onKeyDown={onKeyDown}
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
                        placeholder="Weight in kilograms"
                        type="number" 
                        value={value} 
                        onChange={onChange}
                    />
                </InputWrapper>
            }
        </>
    );
};

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 0.1px solid #fff;
    padding: 5px;
`
const IconWrapper = styled.div`
    display: flex;
    margin: 7px;
`
const StyledFormInput = styled.input`
    font-size: 17px;
    border: none;
    outline: none;
    flex: 1;
    background-color: transparent;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button{
        appearance: none;
    }
`