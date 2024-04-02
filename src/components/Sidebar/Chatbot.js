import React, { useState } from 'react';
import { Flex, Box, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello!", sender: 'bot' },
    // { text: "Sure, I can assist you with that.", sender: 'bot' },
    { text: "Please provide the transcript for additional analysis in order to forecast churn.", sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (!inputValue) return;
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');
    // Here you can add logic to handle the bot's response
  };

  return (
    <Flex direction="column" p="4" bg="black.300" borderRadius="md" boxShadow="md" maxW="300px">
      <Flex
        direction="column"
        flex="1"
        overflowY="auto"
        mb="4"
        px="2"
      >
        {messages.map((message, index) => (
          <Flex key={index} justify={message.sender === 'user' ? 'flex-end' : 'flex-start'} mb="2">
            <Box
              p="2"
              borderRadius="md"
              bg={message.sender === 'user' ? 'blue.500' : 'gray.200'}
              color={message.sender === 'user' ? 'gray.300' : 'black'}
              maxW="70%"
              textAlign={message.sender === 'user' ? 'right' : 'left'}
            >
              {message.text}
            </Box>
          </Flex>
        ))}
      </Flex>
      <InputGroup size="md">
        <Input
          color='black'
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
          bg="gray.200" // Change background color of input
          color="black" // Change text color of input
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={sendMessage} bg="blue.400">
            Send
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default Chatbot;
