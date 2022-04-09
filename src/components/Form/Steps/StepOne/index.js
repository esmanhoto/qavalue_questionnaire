import { useContext, useEffect, useRef, useState } from "react";
import FormContext from "../../context";
import { Container } from "../styles";

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
    if (inputValue.current.value.length < 4) {
      setError("Write at least 4 characters!");
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
      <p>Question 01</p>
      <p>What is your full name?</p>
      <input type="text" ref={inputValue} />
      <button onClick={onNext}>Next</button>
      {error ? <p>{error}</p> : ""}
    </Container>
  );
};

export default StepOne;
