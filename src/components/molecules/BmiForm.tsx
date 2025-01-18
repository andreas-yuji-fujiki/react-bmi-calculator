import styled from "styled-components";

import FormTitle from "../atoms/FormTitle";
import FormLabel from "../atoms/FormLabel";
import FormInput from "../atoms/FormInput";
import FormSubmitBtn from "../atoms/FormSubmitBtn";

import bmiFormProps from "../../types/BmiFormProps";

export default function BmiForm( { 
        heightInputValue, 
        heightInputOnchange,
        heightInputOnKeyDown,

        weightInputValue,
        weightInputOnchange,
        weightInputOnKeyDown,

        onSubmit
    } : bmiFormProps 
) {
    return(
        <StyledForm onSubmit={onSubmit}>
            {/* title */}
            <FormTitle>
                BMI Calculator
            </FormTitle>

            {/* height input */}
            <FormGroup>
                <FormLabel>
                    Height:
                </FormLabel>
                <FormInput 
                    of="height" 
                    value={heightInputValue} 
                    onChange={heightInputOnchange} 
                    onKeyDown={heightInputOnKeyDown}
                />
            </FormGroup>

            {/* height input */}
            <FormGroup>
                <FormLabel>
                    Weight:
                </FormLabel>
                <FormInput 
                    of="weight" 
                    value={weightInputValue} 
                    onChange={weightInputOnchange} 
                    onKeyDown={weightInputOnKeyDown}
                />
            </FormGroup>

            {/* submit btn */}
            <FormSubmitBtn/>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
`