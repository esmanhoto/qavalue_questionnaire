import { FormContextProvider } from "./context";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import Summary from "./Steps/Summary";
import { Container } from "./styles";

const Form = () => {
  return (
    <FormContextProvider>
      <Container>
        <StepOne />
        <StepTwo />
        <StepThree />
        <Summary />
      </Container>
    </FormContextProvider>
  );
};

export default Form;
