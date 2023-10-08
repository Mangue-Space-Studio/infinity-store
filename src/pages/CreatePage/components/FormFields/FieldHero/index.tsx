import * as S from "./styles";
import { useState } from "react";

type ActiveItem = "ASTRO" | "LUCY" | "MAX" | "LUNA" | null;

export default function FieldHero() {
  const [activeItem, setActiveItem] = useState<ActiveItem>(null);

  const handleItemClick = (itemName: ActiveItem) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };
  return (
    <S.divMainFieldHero>
      <S.gridContainerItem>
        <S.gridItem
          className={activeItem === "ASTRO" ? "active" : ""}
          onClick={() => handleItemClick("ASTRO")}
        >
          <S.gridImage src="src\assets\ASTRO.jpg" />
        </S.gridItem>
        <S.gridText>ASTRO</S.gridText>
      </S.gridContainerItem>
      <S.gridContainerItem>
        <S.gridItem
          className={activeItem === "LUCY" ? "active" : ""}
          onClick={() => handleItemClick("LUCY")}
        >
          <S.gridImage src="src\assets\LUCY.jpg" />
        </S.gridItem>
        <S.gridText>LUCY</S.gridText>
      </S.gridContainerItem>
      <S.gridContainerItem>
        <S.gridItem
          className={activeItem === "MAX" ? "active" : ""}
          onClick={() => handleItemClick("MAX")}
        >
          <S.gridImage src="src\assets\MAX.jpg" />
        </S.gridItem>
        <S.gridText>MAX</S.gridText>
      </S.gridContainerItem>
      <S.gridContainerItem>
        <S.gridItem
          className={activeItem === "LUNA" ? "active" : ""}
          onClick={() => handleItemClick("LUNA")}
        >
          <S.gridImage src="src\assets\LUNA.jpg" />
        </S.gridItem>
        <S.gridText>LUNA</S.gridText>
      </S.gridContainerItem>
    </S.divMainFieldHero>
  );
}
