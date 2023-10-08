import { styled } from "styled-components";

export const FormFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("src/assets/backgroundForm.png");
  background-position: center;
  background-size: cover;
`;

export const FormField = styled.div`
  width: 37.02044rem;
  height: 33.25rem;
  flex-direction: column;
`;

export const FormFieldTitleContainer = styled.div`
  margin-bottom: 1.81rem;
`;

export const mainText = styled.p`
  color: var(--Gray-6, #f2f2f2);
  text-align: center;
  font-family: Poppins;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const secondaryTitleText = styled.p`
  color: var(--Gray-4, #bdbdbd);
  font-family: Poppins;
  font-size: 1.46763rem;
  font-style: normal;
  font-weight: 500;
  line-height: 135.5%;
`;
export const mainTitleText = styled.p`
  color: var(--Gray-6, #f2f2f2);
  font-family: Poppins;
  font-size: 1.87531rem;
  font-style: normal;
  font-weight: 700;
  line-height: 135.5%;
`;

export const FormsSelectField = styled.select`
  border-radius: 0.32613rem;
  background: var(--Gray-6, #f2f2f2);
  width: 27.35519rem;
  height: 3.13913rem;
  flex-shrink: 0;
`;

export const FormsSelectFieldItem = styled.option``;

export const FormsSelectFieldTitle = styled.label`
  color: var(--Gray-5, #e0e0e0);
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 135.5%; 
  padding-bottom: 16px;
`;

export const FormsSelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
`;