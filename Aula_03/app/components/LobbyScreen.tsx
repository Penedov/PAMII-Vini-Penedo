import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Image, ImageBackground } from 'react-native';

// Usando ImageBackground para imagem de fundo
const Container = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
  resize-mode: cover; // Ajuste para garantir que a imagem cubra a tela toda
`;

const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  margin-bottom: 40px;
  font-family: '.assets/fonts/PressStart2P-Regular'; // Use o nome da fonte
`;

interface ButtonProps {
  active?: boolean;
}

const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${props => (props.active ? '#555' : '#333')};
  padding: 15px 30px;
  border-radius: 5px;
  margin: 10px;
  border: 2px solid #fff;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: '.assets/fonts/PressStart2P-Regular'; // Use o nome da fonte
`;

const IconContainer = styled.View`
  margin-bottom: 20px;
`;

const LobbyScreen: React.FC = () => {
  const [buttonActive, setButtonActive] = useState(false);

  return (
    // Usando ImageBackground como fundo
    <Container source={require('./assets/images/background.jpeg')}>
      <IconContainer>
        <Image
          source={require('./assets/images/icon.png')} // Ajuste o caminho aqui
          style={{ width: 60, height: 60 }}
        />
      </IconContainer>
      <Title>Lobby Pixelado</Title>
      <Button
        active={buttonActive}
        onPressIn={() => setButtonActive(true)}
        onPressOut={() => setButtonActive(false)}
      >
        <ButtonText>Start Game</ButtonText>
      </Button>
      <Button
        active={buttonActive}
        onPressIn={() => setButtonActive(true)}
        onPressOut={() => setButtonActive(false)}
      >
        <ButtonText>Save Game</ButtonText>
      </Button>
    </Container>
  );
};

export default LobbyScreen;
