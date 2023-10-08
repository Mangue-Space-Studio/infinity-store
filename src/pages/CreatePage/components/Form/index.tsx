import React, { useState } from "react";
import {
  ImagePromptParams,
  StoryPromptParams,
} from "../../../../utils/BackendIntegration/Interfaces";
import { submitForm } from "../../../../utils/BackendIntegration/RequestFunctions";

import * as S from "./styles";
import { typeChar } from "../../../../utils/typeCharacter";
// import { typeHistory } from "../../../../utils/typeHistory";
import { typeSchoolClass } from "../../../../utils/typeSchoolClass";
import { ResultForm } from "../ResultForm";
// import { typeMissions } from "../../../../utils/typeMission";

const FormPrompt: React.FC = () => {
  const [result, setResult] = useState(null);

  const [formData, setFormData] = useState<
    StoryPromptParams & ImagePromptParams
  >({
    age: 0,
    subject: typeSchoolClass[0], // Define o valor padrão como o primeiro item do array.
    character: typeChar[0], // Define o valor padrão como o primeiro item do array.
    characterDescription: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    submitForm(formData, formData)
      .then((response) => {
        console.log(response);
        setResult(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <S.FormFieldsContainer>
      <form onSubmit={handleFormSubmit}>
        <S.mainText>Let’s Build It</S.mainText>
        <S.FormField>
          <S.FormFieldTitleContainer>
            <S.secondaryTitleText>Wellcome to</S.secondaryTitleText>
            <S.mainTitleText>InfinityStory</S.mainTitleText>
          </S.FormFieldTitleContainer>
          <S.FormsSelectContainer>
            <S.FormsSelectFieldTitle>Select Character</S.FormsSelectFieldTitle>
            <S.FormsSelectField
              name="character"
              value={formData.character}
              onChange={handleInputChange}
            >
              {typeChar.map((i) => (
                <S.FormsSelectFieldItem key={i}>{i}</S.FormsSelectFieldItem>
              ))}
            </S.FormsSelectField>
          </S.FormsSelectContainer>
          {/* <S.FormsSelectContainer>
          <S.FormsSelectFieldTitle>Story type</S.FormsSelectFieldTitle>
          <S.FormsSelectField>
            {typeHistory.map((i) => (
              <S.FormsSelectFieldItem key={i}>{i}</S.FormsSelectFieldItem>
            ))}
          </S.FormsSelectField>
        </S.FormsSelectContainer> */}
          <S.FormsSelectContainer>
            <S.FormsSelectFieldTitle>Subjet</S.FormsSelectFieldTitle>
            <S.FormsSelectField>
              {typeSchoolClass.map((i) => (
                <S.FormsSelectFieldItem key={i}>{i}</S.FormsSelectFieldItem>
              ))}
            </S.FormsSelectField>
          </S.FormsSelectContainer>
          {/* <S.FormsSelectContainer>
          <S.FormsSelectFieldTitle>Mission</S.FormsSelectFieldTitle>
          <S.FormsSelectField>
            {typeMissions.map((i) => (
              <S.FormsSelectFieldItem key={i}>{i}</S.FormsSelectFieldItem>
            ))}
          </S.FormsSelectField>
        </S.FormsSelectContainer> */}
          <S.FormsSelectContainer>
            <S.FormsSelectFieldTitle>Age</S.FormsSelectFieldTitle>
            <S.FormsInputField
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </S.FormsSelectContainer>
          <S.FormsSelectContainer>
            <S.FormsSelectFieldTitle>
              Character Description
            </S.FormsSelectFieldTitle>
            <S.FormsTextField
              name="characterDescription"
              value={formData.characterDescription}
              onChange={handleInputChange}
            />
          </S.FormsSelectContainer>
          <S.FormsSelectContainer>
            <S.ButtonSend type="submit">Enviar</S.ButtonSend>
          </S.FormsSelectContainer>
        </S.FormField>
      </form>
      <ResultForm result={result} />
    </S.FormFieldsContainer>
  );
};

export default FormPrompt;
