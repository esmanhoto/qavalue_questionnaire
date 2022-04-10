import { useContext, useEffect, useRef, useState } from "react";
import FormContext from "../../context";
import {
  Button,
  Container,
  ErrorMessage,
  QuestionNumber,
  QuestionTitle,
} from "../styles";
import { Input } from "./styles";

const StepOne = () => {
  const { answers, setAnswerHandler, step, setStepHandler } =
    useContext(FormContext);

  const inputValue = useRef("default");
  const [error, setError] = useState("");

  //   const onNext = () => {
  //     setStepHandler(2);
  //     setAnswerHandler("stepOne", inputValue.current.value);
  //   };

  const onNext = () => {
    if (inputValue.current.value.length < 2) {
      setError("Write at least 2 characters!");
    } else {
      setStepHandler(2);
      setAnswerHandler("stepOne", inputValue.current.value);
      setError("");
    }
  };

  useEffect(() => {
    inputValue.current.value = answers?.stepOne ? answers?.stepOne : "";
  }, [answers?.stepOne]);

  return (
    <Container active={step === 1}>
      <QuestionNumber>Question 01</QuestionNumber>
      <QuestionTitle>What is your name?</QuestionTitle>
      <Input type="text" ref={inputValue} />
      <Button onClick={onNext}>Next</Button>
      {error ? <ErrorMessage>{error}</ErrorMessage> : ""}
    </Container>
  );
};

export default StepOne;
