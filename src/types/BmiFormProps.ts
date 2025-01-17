import { ChangeEvent } from "react";

export default interface bmiFormProps {
    heightInputValue: string;
    heightInputOnchange: (event : ChangeEvent<HTMLInputElement>) => void;
    weightInputValue: string;
    weightInputOnchange: (event : ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}