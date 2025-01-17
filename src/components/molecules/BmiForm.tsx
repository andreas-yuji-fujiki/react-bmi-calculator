import styled from "styled-components";

import FormTitle from "../atoms/FormTitle";
import FormLabel from "../atoms/FormLabel";
import FormInput from "../atoms/FormInput";
import FormSubmitBtn from "../atoms/FormSubmitBtn";

import bmiFormProps from "../../types/BmiFormProps";

export default function BmiForm( { 
        heightInputValue, 
        heightInputOnchange,

        weightInputValue,
        weightInputOnchange
    } : bmiFormProps 
) {
    return(
        <StyledForm>
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
                />
            </FormGroup>

            {/* submit btn */}
            <FormSubmitBtn/>
        </StyledForm>
    )
}

const StyledForm = styled.form``
const FormGroup = styled.div``