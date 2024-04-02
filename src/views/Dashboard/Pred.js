import React from 'react';
import { Flex, Text, Switch, Grid, useColorModeValue, Input, Button } from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import Predictions from './Predictions';

const Pred = () => {
  return (
    <Flex p='20px'>
        <Grid templateColumns={{ sm: "1fr", xl: "repeat(1, 1fr)" }} gap='13px'>
            <Flex p='15px 5px' mt='40px' mb='40px'>
                {/* <Card p='16px' mt='20px' mb='20px'> */}
                    <CardBody p='5px' px='5px'>
                        <Flex align='center' mt='5px' mb='5px'>
                            <Flex align='center' mb='20px'>
                                <Predictions />
                            </Flex>
                        </Flex>
                    </CardBody>    
                {/* </Card> */}
            </Flex>

            <Flex p='15px 5px' mt='-2150px' mb='2000px'>
                <Card p='16px' mt='20px' mb='20px'>
                    <CardBody p='5px' px='5px'>
                        Answer
                        <Flex align='center' mt='5px' mb='5px'>
                            <Flex align='center' mb='20px'>
                                {/* <Text
                                    noOfLines={1}
                                    fontSize='md'
                                    color='gray.400'
                                    fontWeight='400'>
                                    predict Button add
                                </Text> */}
                            </Flex>
                        </Flex>
                    </CardBody>
                </Card>
            </Flex>
            <Button p='5px 5px' mt='-2040px' rounded='100px'>
                Predict
            </Button>
        </Grid>
    </Flex>
  );
}

export default Pred;