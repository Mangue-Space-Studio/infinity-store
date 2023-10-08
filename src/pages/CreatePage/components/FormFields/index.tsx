import FieldHero from "./FieldHero";
import * as S from "./styles";

export default function FormFields() {
    return (
    <S.containerFormFields>
      <S.background>
        <S.mainText>Select the Tutor</S.mainText>
        <FieldHero />
      </S.background>
    </S.containerFormFields>
  );
}
