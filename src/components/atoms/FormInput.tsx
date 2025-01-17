import styled from "styled-components";
import FormInputProps from '../../types/FormInputProps'

export default function FormInput( { value, onChange } : FormInputProps ){
    return(
        <StyledFormInput type="number" value={value} onChange={onChange}/>
    );
};

const StyledFormInput = styled.input``