import {
  AbsoluteCenter,
  Container,
  Select,
  Text,
  Switch,
  Flex,
  SliderTrack,
  SliderFilledTrack,
  Box,
  Slider,
  SliderThumb,
  Button,
} from "@chakra-ui/react";
import { typeHistory } from "../../../../utils/typeHistory";
import { typeChar } from "../../../../utils/typeCharacter";
import { typeSchoolClass } from "../../../../utils/typeSchoolClass";
import { useState } from "react";
import { typeMissions } from "../../../../utils/typeMission";

const SideField = () => {
  const [age, setAge] = useState(3);

  const handleAgeChange = (value: number) => {
    setAge(value);
  };

  return (
    <AbsoluteCenter>
      <Container>
        <Text>Escolha quem vai te ajudar nesta jornada</Text>
        <Flex>
          <Text>Astro</Text>
          <Switch size="lg" />
          <Text>Luna</Text>
        </Flex>
      </Container>
      <Container>
        <Select placeholder="Selecione a história">
          {typeHistory.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </Select>
      </Container>
      <Container>
        <Select placeholder="Selecione o personagem">
          {typeChar.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </Select>
      </Container>
      <Container>
        <Select placeholder="Selecione a matéria">
          {typeSchoolClass.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </Select>
      </Container>
      <Container>
        <Select placeholder="Selecione as missões">
          {typeMissions.map((i) => {
            return <option value={i}>{i}</option>;
          })}
        </Select>
      </Container>
      <Container>
        <Box>
          <Text>Selecione sua idade</Text>
          <Text>{age} anos</Text>
          <Slider
            aria-label="Age"
            value={age}
            min={18}
            max={100}
            step={1}
            onChange={handleAgeChange}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize="sm" boxSize={6} children={age} />
          </Slider>
        </Box>
      </Container>
      <Container>
        <Button>Enviar Prompt</Button>
      </Container>
    </AbsoluteCenter>
  );
};

export default SideField;
