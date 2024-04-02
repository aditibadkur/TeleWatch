import React, { useState } from 'react';
import { Flex, Text, Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react';
import Chatbot from './Chatbot'; // Import your Chatbot component

const HelpButton = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <Flex direction='column' textAlign='center' p='2'>
      {/* <Text fontSize='14px' fontWeight='bold' mb='2'>
        Need help?
      </Text> */}
      <Popover isOpen={isPopoverOpen} onClose={() => setIsPopoverOpen(false)} placement="auto">
        <PopoverTrigger>
          <Button fontSize='14px' color='gray.500' onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
            Need Help?  
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Chatbot</PopoverHeader>
          <PopoverBody>
            <Chatbot />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default HelpButton;
