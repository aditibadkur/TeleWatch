import { Flex, Box, Grid, Text } from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
// import image from "assets/img/BackgroundCard1.png";
import { Image } from '@chakra-ui/react';

const xai = () => {
  return (
    <Flex p='15px' mt='40px' mb='40px'>
            <Card p='16px' mt='20px' mb='20px'fontWeight='bold' >
                <CardBody align='center' p='5px' px='5px' fontWeight='bold'>
                Correlation
                    <Flex align='center' p='15px 350px' mt='5px' mb='5px'>
                        <Flex align='center' mb='20px'>
                            {/* <Box boxSize='sm'> */}
                                <Image src='correlation.jpg' alt='correlation' />
                            {/* </Box> */}
                        </Flex>
                    </Flex>
                </CardBody>

                <CardBody align='center' p='5px' px='5px' fontWeight='bold'>
                Summary Plot
                    <Flex align='center' p='15px 350px' mt='5px' mb='5px'>
                        <Flex align='center' mb='20px'>
                            {/* <Box boxSize='sm'> */}
                                <Image src='summaryPlot.jpg' alt='summaryPlot' />
                            {/* </Box> */}
                        </Flex>
                    </Flex>
                </CardBody>

                <CardBody align='center' p='5px' px='5px' fontWeight='bold'>
                Tenure Effect
                    <Flex align='center' p='15px 350px' mt='5px' mb='5px'>
                        <Flex align='center' mb='20px'>
                            {/* <Box boxSize='sm'> */}
                                <Image src='tenureEffect.jpg' alt='tenureEffect' />
                            {/* </Box> */}
                        </Flex>
                    </Flex>
                </CardBody>

                <CardBody align='center' p='5px' px='5px' fontWeight='bold'>
                Feature Importance
                    <Flex align='center' p='15px 350px' mt='5px' mb='5px'>
                        <Flex align='center' mb='20px'>
                            {/* <Box boxSize='sm'> */}
                                <Image src='featureImp.png' alt='featureImp' />
                            {/* </Box> */}
                        </Flex>
                    </Flex>
                </CardBody>
            </Card>
        </Flex>
    // <Flex p='100px 400px' mt='40px' mb='40px'>
    //     <Grid templateColumns={{ sm: "1fr", xl: "repeat(1, 1fr)" }} gap='13px'>
    //         <Box boxSize='sm'>
    //             <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
    //         </Box>
    //     </Grid>
    // </Flex>
    // <Grid templateColumns={{ sm: "1fr", xl: "repeat(4, 1fr)" }} gap='13px'>
        /* <CardHeader p='12px 5px' mb='12px'>
                <Text fontSize='lg' color={textColor} fontWeight='bold'>
                This will predict whether a customer will churn or not based on previous churn data
                </Text>
            </CardHeader> */
        
    // </Grid>
  )
}

export default xai;