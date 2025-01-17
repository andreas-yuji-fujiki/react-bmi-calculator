import { ChangeEvent } from "react";
export default interface FormInputProps {
    value: string;
    for: 'weight' | 'height';
    onChange: (event : ChangeEvent<HTMLInputElement>) => void;
};