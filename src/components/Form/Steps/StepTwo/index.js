import { useContext, useEffect, useRef, useState } from "react";
import FormContext from "../../context";
import {
  Button,
  Container,
  ErrorMessage,
  QuestionNumber,
  QuestionTitle,
} from "../styles";
import { SelectInput, SelectOptions } from "./styles";

const StepTwo = () => {
  const { answers, setAnswerHandler, step, setStepHandler } =
    useContext(FormContext);

  const inputValue = useRef();
  const [error, setError] = useState("");

  const onPrev = () => {
    setStepHandler(1);
  };

  //   const onNext = () => {
  //     setStepHandler(3);
  //     setAnswerHandler("stepTwo", inputValue.current.value);
  //   };

  const onNext = () => {
    if (inputValue.current.value === "") {
      setError("You must choose an option");
    } else {
      setStepHandler(3);
      setAnswerHandler("stepTwo", inputValue.current.value);
      setError("");
    }
  };

  useEffect(() => {
    inputValue.current.value = answers?.stepTwo ? answers?.stepTwo : "";
  }, [answers?.stepTwo]);

  return (
    <Container active={step === 2}>
      <QuestionNumber>Question 02</QuestionNumber>
      <QuestionTitle>
        Which programming language do you consider as most valuable nowadays?
      </QuestionTitle>
      <SelectInput name="select" ref={inputValue}>
        <SelectOptions value="" ref={inputValue}>
          Select an option
        </SelectOptions>
        <SelectOptions value="Javascript" ref={inputValue}>
          Javascript
        </SelectOptions>
        <SelectOptions value="Python" ref={inputValue}>
          Python
        </SelectOptions>
        <SelectOptions value="C++" ref={inputValue}>
          C++
        </SelectOptions>
      </SelectInput>
      <Button onClick={onPrev}>Previous</Button>
      <Button onClick={onNext}>Next</Button>
      {error ? <ErrorMessage>{error}</ErrorMessage> : ""}
    </Container>
  );
};

export default StepTwo;
