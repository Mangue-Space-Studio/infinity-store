import { typeChar } from "../../../../../utils/typeCharacter";
import { typeHistory } from "../../../../../utils/typeHistory";
import { typeMissions } from "../../../../../utils/typeMission";
import { typeSchoolClass } from "../../../../../utils/typeSchoolClass";
import * as S from "./styles";

export default function FieldSelects() {
  return (
    <S.FormFieldsContainer>
      <S.mainText>Let’s Build It</S.mainText>
      <S.FormField>
        <S.FormFieldTitleContainer>
          <S.secondaryTitleText>Wellcome to</S.secondaryTitleText>
          <S.mainTitleText>InfinityStory</S.mainTitleText>
        </S.FormFieldTitleContainer>
        <S.FormsSelectContainer>
          <S.FormsSelectFieldTitle>Select Character</S.FormsSelectFieldTitle>
          <S.FormsSelectField>
            {typeChar.map((i) => (
              <S.FormsSelectFieldItem key={i}>{i}</S.FormsSelectFieldItem>
            ))}
          </S.FormsSelectField>
        </S.FormsSelectContainer>
        <S.FormsSelectContainer>
          <S.FormsSelectFieldTitle>Story type</S.FormsSelectFieldTitle>
          <S.FormsSelectField>
            {typeHistory.map((i) => (
              <S.FormsSelectFieldItem key={i}>{i}</S.FormsSelectFieldItem>
            ))}
          </S.FormsSelectField>
        </S.FormsSelectContainer>
        <S.FormsSelectContainer>
          <S.FormsSelectFieldTitle>Subjet</S.FormsSelectFieldTitle>
          <S.FormsSelectField>
            {typeSchoolClass.map((i) => (
              <S.FormsSelectFieldItem key={i}>{i}</S.FormsSelectFieldItem>
            ))}
          </S.FormsSelectField>
        </S.FormsSelectContainer>
        <S.FormsSelectContainer>
          <S.FormsSelectFieldTitle>Mission</S.FormsSelectFieldTitle>
          <S.FormsSelectField>
            {typeMissions.map((i) => (
              <S.FormsSelectFieldItem key={i}>{i}</S.FormsSelectFieldItem>
            ))}
          </S.FormsSelectField>
        </S.FormsSelectContainer>
        <S.FormsSelectContainer>
          <S.FormsSelectFieldTitle>Story type</S.FormsSelectFieldTitle>
          <S.FormsSelectField>
            {typeHistory.map((i) => (
              <S.FormsSelectFieldItem key={i}>{i}</S.FormsSelectFieldItem>
            ))}
          </S.FormsSelectField>
        </S.FormsSelectContainer>
      </S.FormField>
    </S.FormFieldsContainer>
  );
}
