import { ChangeEvent } from "react";
export default interface FormInputProps {
    value: string;
    onChange: (event : ChangeEvent<HTMLInputElement>) => void;
};