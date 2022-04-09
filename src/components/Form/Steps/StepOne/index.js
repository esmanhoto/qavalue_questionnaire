import { useContext, useEffect, useRef, useState } from "react";
import FormContext from "../../context";
import { Container } from "../styles";

const StepOne = () => {
  const { answers, setAnswerHandler, step, setStepHandler } =
    useContext(FormContext);

  const inputValue = useRef("default");

  const onNext = () => {
    setStepHandler(2);
    setAnswerHandler("stepOne", inputValue.current.value);
  };

  useEffect(() => {
    inputValue.current.value = answers?.stepOne ? answers?.stepOne : "";
  }, [answers?.stepOne]);

  return (
    <Container active={step === 1}>
      <p>Question 01</p>
      <p>What is your full name?</p>
      <input type="text" ref={inputValue} />
      <button onClick={onNext}>Next</button>
      <p>error</p>
    </Container>
  );
};

export default StepOne;
