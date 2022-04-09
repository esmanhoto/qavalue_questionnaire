import { FormContextProvider } from "./context";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import Summary from "./Steps/Summary";

const Form = () => {
  return (
    <FormContextProvider>
      <div>
        <StepOne />
        <StepTwo />
        <StepThree />
        <Summary />
      </div>
    </FormContextProvider>
  );
};

export default Form;
