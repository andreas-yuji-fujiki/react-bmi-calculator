import { ChangeEvent } from "react";
export default interface FormInputProps {
    value: string;
    of: 'weight' | 'height';
    onChange: (event : ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};