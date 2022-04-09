import { useContext, useEffect, useRef, useState } from "react";
import FormContext from "../../context";
import { Container } from "../styles";

const StepTwo = () => {
  const { answers, setAnswerHandler, step, setStepHandler } =
    useContext(FormContext);

  const inputValue = useRef();

  const onPrev = () => {
    setStepHandler(1);
  };

  const onNext = () => {
    setStepHandler(3);
    setAnswerHandler("stepTwo", inputValue.current.value);
  };

  useEffect(() => {
    inputValue.current.value = answers?.stepTwo ? answers?.stepTwo : "";
  }, [answers?.stepTwo]);

  return (
    <Container active={step === 2}>
      <p>Question 02</p>
      <p>text</p>
      <select name="select" ref={inputValue}>
        <option value="" ref={inputValue}>
          Select an option
        </option>
        <option value="Javascript" ref={inputValue}>
          Javascript
        </option>
        <option value="Python" ref={inputValue}>
          Python
        </option>
        <option value="C++" ref={inputValue}>
          C++
        </option>
      </select>
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
      <p>error</p>
    </Container>
  );
};

export default StepTwo;
