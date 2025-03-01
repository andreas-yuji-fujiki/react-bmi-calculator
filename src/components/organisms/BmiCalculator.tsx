import styled from "styled-components";
import { useState } from "react";

import BmiForm from "../molecules/BmiForm";
import ResultBox from "../molecules/ResultBox";

export default function BmiCalculator() {
    {/* states */}
    let [height, setHeight] = useState<number | null>(null);
    let [weight, setWeight] = useState<number | null>(null);

    const [bmi, setBmi] = useState<number>(0);

    const [resultVisibleState, setResultVisibleState] = useState<boolean>(false);
    const [description, setDescription] = useState<string>('');
    const [descriptionColor, setDescriptionColor] = useState<'green' | 'yellow' | 'red'>('green');

    {/* calculate bmi function */}
    function calculateBMI() {
        if (height === null || height < 0 || weight === null || weight < 0) {
            return;
        }

        const dividedHeight = height / 100;
        const calculatedBmi = weight / (dividedHeight * dividedHeight);

        setBmi(calculatedBmi);
        createResult(calculatedBmi);
    }

    {/* create description function */}
    function createResult(calculatedBmi: number) {
        if (calculatedBmi < 18.5) {
            setDescription('Underweight.');
            setDescriptionColor('yellow');
        }
        if (calculatedBmi > 18.5 && calculatedBmi < 24.9) {
            setDescription('Normal weight.');
            setDescriptionColor('green');
        }
        if (calculatedBmi > 24.9 && calculatedBmi < 29.9) {
            setDescription('Overweight.');
            setDescriptionColor('yellow');
        }
        if (calculatedBmi > 29.9 && calculatedBmi < 34.9) {
            setDescription('Obesity Class 1 (Moderate).');
            setDescriptionColor('yellow');
        }
        if (calculatedBmi > 34.9 && calculatedBmi < 40) {
            setDescription('Obesity Class 2 (Severe).');
            setDescriptionColor('red');
        }
        if (calculatedBmi > 40) {
            setDescription('Obesity Class 3 (Morbid).');
            setDescriptionColor('red');
        }
    }

    {/* clear inputs */}
    function clearInputs() {
        setHeight(null);
        setWeight(null);
    }

    {/* handle submit function */}
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        calculateBMI();
        clearInputs();
        setResultVisibleState(true);
    }

    // Limiting height input to max 999 and weight input to max 999
    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value <= 999) {
            setHeight(value);
        }
    };

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value <= 999) {
            setWeight(value);
        }
    };

    return (
        <CalculatorWrapper>
            {/* form */}
            <BmiForm
                heightInputOnchange={handleHeightChange}
                heightInputValue={String(height).replace(/[\.,]/g, '')}
                heightInputOnKeyDown={(e) => {
                    if (e.key === '.' || e.key === ',') {
                        e.preventDefault();
                    }
                }}

                weightInputOnchange={handleWeightChange}
                weightInputValue={String(weight).replace(/[\.,]/g, '')}
                weightInputOnKeyDown={(e) => {
                    if (e.key === '.' || e.key === ',') {
                        e.preventDefault();
                    }
                }}

                onSubmit={handleSubmit}
            />

            {/* result */}
            <ResultBox
                bmi={Number(bmi.toFixed(2))}
                description={description}
                descriptionColor={descriptionColor}
                isVisible={resultVisibleState}
            />
        </CalculatorWrapper>
    );
}

const CalculatorWrapper = styled.div`
    height: 465px;
    width: 350px;
    padding: 40px;

    display: flex;
    flex-direction: column;

    background-color: #000;
    
    border-radius: 5px;

    @media screen and (max-width: 890px){
        width: 100%;
        justify-content: center;
    }
    @media screen and (max-width: 600px){
        height: 100dvh;
    }
    @media screen and ( max-width: 350px ) {
        justify-content: flex-start;
    }
`;
