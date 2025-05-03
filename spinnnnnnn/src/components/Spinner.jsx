import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const messages = [
  "Teka lang ha...🙄🖐👄",
  "Hayaan mo munang paikotin ka... 😥💔",
  "Naglo-load pa nga diba! 😾👊",
  "SABING MAGHINTAY! 😤😤😤"
];

const Spinner = () => {
  const [currentMsg, setCurrentMsg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMsg((prev) => (prev + 1) % messages.length);
    }, 2000); // every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Circle />
      <Message>{messages[currentMsg]}</Message>
    </Wrapper>
  );
};

export default Spinner;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff0f6;
  color: #ff69b4;
  font-family: "Comic Sans MS", cursive, sans-serif;
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid #ffe0ec;
  border-top: 6px solid #ff69b4;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`;

const Message = styled.div`
  font-size: 1.2rem;
  text-align: center;
  padding: 0 20px;
  max-width: 80%;
  line-height: 1.5;
`;
