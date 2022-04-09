import { createContext, useState } from "react";

const FormContext = createContext({
  answers: null,
  setAnswerHandler: null,
  step: null,
  setStepHandler: () => null,
});

export const FormContextProvider = (props) => {
  const [answers, setAnswers] = useState();
  const [step, setStep] = useState(1);

  const setAnswerHandler = (step, answer) => {
    setAnswers((prev) => {
      switch (step) {
        case "stepOne":
          return { ...prev, stepOne: answer };
        case "stepTwo":
          return { ...prev, stepTwo: answer };
        case "stepThree":
          return { ...prev, stepThree: answer };
        case "clear":
          return {};
        default:
          return prev;
      }
    });
  };

  const setStepHandler = (newStep) => {
    setStep(newStep);
  };

  return (
    <FormContext.Provider
      value={{
        answers,
        setAnswerHandler,
        step,
        setStepHandler,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
