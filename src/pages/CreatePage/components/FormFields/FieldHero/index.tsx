import * as S from './styles';

export default function FieldHero() {
    return(
        <S.divMainFieldHero>
            <S.gridItem>
                <S.gridImage src='src\assets\ASTRO.jpg'/>
                <S.gridText>ASTRO</S.gridText>
            </S.gridItem>
            <S.gridItem>
                <S.gridImage src='src\assets\LUCY.jpg'/>
                <S.gridText>LUCY</S.gridText>
            </S.gridItem>
            <S.gridItem>
                <S.gridImage src='src\assets\MAX.jpg'/>
                <S.gridText>MAX</S.gridText>
            </S.gridItem>
            <S.gridItem>
                <S.gridImage src='src\assets\LUNA.jpg'/>
                <S.gridText>LUNA</S.gridText>
            </S.gridItem>
        </S.divMainFieldHero>
    )
}