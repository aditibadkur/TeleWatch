import { Flex, Text, Switch, Grid, useColorModeValue, Input, Button } from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import React, { useState, useRef, useEffect } from 'react';    
import Papa from 'papaparse';

function Predictions () {

    const textColor = useColorModeValue("gray.700", "white");
    const [userChoices, setUserChoices] = useState({}); // State to store user choices
    const [csvData, setCsvData] = useState([]); // State to store CSV data
  const [matchFound, setMatchFound] = useState(false); // State to track if match is found

  useEffect(() => {
    // Fetch or read CSV file on component mount
    const fetchCsvData = async () => {
      const response = await fetch('/path/to/your/csv/file.csv'); // Adjust path to your CSV file
      const csvText = await response.text();
      const result = Papa.parse(csvText, { header: true });
      setCsvData(result.data);
    };

    fetchCsvData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

//   const handleChoices = () => {
//     // Compare user choices with CSV data
//     for (let row of csvData) {
//         // Check if all user choices match the corresponding values in the CSV row
//         let isMatch = true;
//         for (let key in userChoices) {
//           if (userChoices[key] !== row[key]) {
//             isMatch = false;
//             console.log("Better luck next time")
//             break; // No need to continue checking if one choice doesn't match
//           }
//         }
//         if (isMatch) {
//           setMatchFound(true);
//           console.log("Match Found!!")
//           break; // Stop iteration if match is found
//         }
//     }
//   };

// const handleChoices = () => {
//     // Compare user choices with CSV data
//     for (let row of csvData) {
//       // Check if all user choices match the corresponding values in the CSV row
//       let matchingColumns = 0; // Count of matching columns
//       for (let key in userChoices) {
//         if (userChoices[key] === row[key]) {
//           matchingColumns++;
//         }
//         if (matchingColumns >= 4) {
//           setMatchFound(true);
//           console.log("Match Found!!");
//           console.log(matchingColumns);
//           return; // Exit function if match is found
//         }
//       }
//       console.log(matchingColumns);
//     }
//     console.log("Better luck next time");
//   };

// const handleChoices = () => {
//     try {
//       // Compare user choices with CSV data
//       for (let row of csvData) {
//         // Check if all user choices match the corresponding values in the CSV row
//         let matchingColumns = 0; // Count of matching columns
//         for (let key in userChoices) {
//           if (userChoices.hasOwnProperty(key) && row.hasOwnProperty(key)) {
//             if (userChoices[key] === partner[key]) {
//               matchingColumns++;
//             }
//             if (userChoices[key] === tenure[key]) {
//                 matchingColumns++;
//             }
//             if (userChoices[key] === SeniorCitizen[key]) {
//                 matchingColumns++;
//             }
//             if (userChoices[key] === gender[key]) {
//                 matchingColumns++;
//             }
//           } else {
//             console.error(`Key ${key} not found in CSV row or user choices`);
//           }
//         }
//         console.log("Matching Columns:", matchingColumns);
//         if (matchingColumns >= 4) {
//           setMatchFound(true);
//           console.log("Match Found!!");
//           console.log("Matching Columns:", matchingColumns);
//           return; // Exit function if match is found
//         }       
//       }
//       console.log("Better luck next time");
//     } catch (error) {
//       console.error("Error in handleChoices:", error.message);
//     }
//   };
  

    // const [csvData, setCsvData] = useState([]);
    // const filePath = 'public/churn_prediction.csv';

    // const handleFileUpload = (event) => {
    //     // const file = event.target.files[0];
    //     Papa.parse(filePath, {
    //       header: true,
    //       complete: (result) => {
    //         setCsvData(result.data);
    //       },
    //       error: (error) => {
    //         console.error('Error parsing CSV:', error);
    //       }
    //     });
    //   };
    
    //   // Function to compare user choices with CSV data
    //   const findChurnPrediction = () => {
    //     for (let row of csvData) {
    //       let isMatch = true;
    //       for (let key in userChoices) {
    //         if (row[key] !== userChoices[key]) {
    //           isMatch = false;
    //           break;
    //         }
    //       }
    //       if (isMatch) {
    //         return row.churnPrediction; // Return the churn prediction if there's a match
    //       }
    //     }
    //     return null; // Return null if no match found
    //   };
    

    // Function to handle toggle
    const handleToggle = (category, choice) => {
    setUserChoices(prevChoices => ({
        ...prevChoices,
        [category]: choice // Store the choice for the category in the dictionary
    }));
    };

    const handleInputChange = (category, value) => {
        setUserChoices(prevChoices => ({
          ...prevChoices,
          [category]: value // Update the category property in userChoices with the entered value
        }));
      };

    return(
        <Flex p='20px'>
            <Grid templateColumns={{ sm: "1fr", xl: "repeat(4, 1fr)" }} gap='22px'>
                <Flex p='15px 5px' mt='40px' mb='40px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                        Gender
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Male
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('gender', 0)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Female
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('gender', 1)}/>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='40px' mb='40px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Senior Citizen
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Yes
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('seniorCitizen', 1)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        No
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('seniorCitizen', 0)}/>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='40px' mb='40px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Partner
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Yes
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('Partner', 1)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        No
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('partner', 0)}/>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='40px' mb='40px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Dependents
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Yes
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('dependents', 1)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        No
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('dependents', 0)}/>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-100px' mb='400px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Phone Service
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Yes
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('phone service', 1)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        No
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('phone service', 0)}/>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-100px' mb='400px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            MultipleLines
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Yes
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('multiple lines', 1)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        No
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('multiple lines', 0)}/>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-100px' mb='400px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Paperless Billing
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Yes
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('paperless billing', 1)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        No
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('paperless billing', 0)}/>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-100px' mb='400px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Online Security
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Yes
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('online security', 1)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        No
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('online security', 0)}/>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-460px' mb='800px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Online Backup
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Yes
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('online backup', 1)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        No
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('online backup', 0)}/>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-460px' mb='800px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Device Protection
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Yes
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('device protection', 1)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        No
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('device protection', 0)}/>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-460px' mb='800px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Tech Support
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Yes
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('tech support', 1)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        No
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('tech support', 0)}/>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-460px' mb='800px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Streaming TV
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Yes
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('streaming TV', 1)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        No
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('streaming TV', 0)}/>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-860px' mb='1300px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Streaming Movies
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Yes
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('streaming movies', 1)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        No
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('streaming movies', 0)}/>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-860px' mb='1300px'>
                <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Tenure
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    {/* Input box reqd */}
                                    <Input
                                        variant='auth'
                                        fontSize='sm'
                                        ms='4px'
                                        type='text'
                                        placeholder='0'
                                        mb='24px'
                                        size='lg'
                                        onChange={(e) => handleInputChange('tenure', e.target.value)}
                                    />
                                    {/* <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Male16
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' />
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Female16
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' /> */}
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-860px' mb='1300px'>
                <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Monthly Charges
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                    {/* Input box reqd */}
                                    <Input
                                        variant='auth'
                                        fontSize='sm'
                                        ms='4px'
                                        type='text'
                                        placeholder='0'
                                        mb='24px'
                                        size='lg'
                                        onChange={(e) => handleInputChange('MonthlyCharges', e.target.value)}
                                    />
                                    {/* <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Male17
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' />
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Female17
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' /> */}
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-860px' mb='1300px'>
                <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Total Charges
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                {/* Input box reqd */}
                                <Input
                                        variant='auth'
                                        fontSize='sm'
                                        ms='4px'
                                        type='text'
                                        placeholder='0'
                                        mb='24px'
                                        size='lg'
                                        onChange={(e) => handleInputChange('TotalCharges', e.target.value)}
                                    />
                                    {/* <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Male15
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' />
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Female15
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' /> */}
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-1360px' mb='1800px'>
                    {/* <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Tenure
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'> */}
                                    {/* Input box reqd */}
                                    {/* <Input
                                        variant='auth'
                                        fontSize='sm'
                                        ms='4px'
                                        type='text'
                                        placeholder='0'
                                        mb='24px'
                                        size='lg'
                                    /> */}
                                    {/* <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Male16
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' />
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Female16
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' /> */}
                                {/* </Flex>
                            </Flex>
                        </CardBody>
                    </Card> */}
                </Flex>

                <Flex p='15px 5px' mt='-1360px' mb='1800px'>
                    {/* <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Monthly Charges
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'> */}
                                    {/* Input box reqd */}
                                    {/* <Input
                                        variant='auth'
                                        fontSize='sm'
                                        ms='4px'
                                        type='text'
                                        placeholder='0'
                                        mb='24px'
                                        size='lg'
                                    /> */}
                                    {/* <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Male17
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' />
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Female17
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' /> */}
                                {/* </Flex>
                            </Flex>
                        </CardBody>
                    </Card> */}
                </Flex>

                <Flex p='15px 5px' mt='-1360px' mb='1800px'>
                    {/* <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Total Charges
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'> */}
                                {/* Input box reqd */}
                                {/* <Input
                                        variant='auth'
                                        fontSize='sm'
                                        ms='4px'
                                        type='text'
                                        placeholder='0'
                                        mb='24px'
                                        size='lg'
                                    /> */}
                                    {/* <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Male15
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' />
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Female15
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' /> */}
                                {/* </Flex>
                            </Flex>
                        </CardBody>
                    </Card> */}
                </Flex>

                {/* <Flex p='15px 5px' mt='-1360px' mb='1800px'>
                    <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Contract
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Month-to-Month
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' />
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Annually
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' />
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Two year
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' />
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex> */}

                <Flex p='15px 5px' mt='-1360px' mb='1800px'>
                    {/* <Card p='16px' mt='20px' mb='20px'>
                        <CardBody p='5px' px='5px'>
                            Contract
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Month-to-Month
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' />
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Annually
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' />
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Two year
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' />
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card> */}
                </Flex>

                <Flex p='15px 5px' mt='-1860px' mb='2000px'>
                    <Card p='16px' mt='40px' mb='40px'>
                        <CardBody p='5px' px='5px'>
                            Contract
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                <Text
                                        noOfLines={3}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Month-to-Month
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('Contract', 1)}/>
                                    <Text
                                        noOfLines={3}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Annually
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('Contract', 0)}/>
                                    {/* <Text
                                        noOfLines={3}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Two year
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('Contract', 'Two Year')}/> */}
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-1860px' mb='2000px'>
                    <Card p='16px' mt='40px' mb='40px'>
                        <CardBody p='5px' px='5px'>
                            Internet Services
                            <Flex align='center' mt='5px' mb='5px'>
                                <Flex align='center' mb='20px'>
                                <Text
                                        noOfLines={2}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        Fibre Optic
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('InternetServices', 1)}/>
                                    <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        No
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('InternetServices', 0)}/>
                                    {/* <Text
                                        noOfLines={1}
                                        fontSize='md'
                                        color='gray.400'
                                        fontWeight='400'>
                                        DSL
                                    </Text>
                                    <Switch colorScheme='blue' me='10px' onChange={() => handleToggle('InternetServices', 'DSL')}/> */}
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

                <Flex p='15px 5px' mt='-1840px' mb='2020px'>
                {/* <Card p='16px' mt='20px' mb='20px'>
                    <CardBody p='5px' px='5px'>
                        Answer
                        <Flex align='center' mt='5px' mb='5px'>
                            <Flex align='center' mb='20px'> */}
                                {/* <Text
                                    noOfLines={1}
                                    fontSize='md'
                                    color='gray.400'
                                    fontWeight='400'>
                                    predict Button add
                                </Text> */}
                            {/* </Flex>
                        </Flex>
                    </CardBody>
                </Card> */}
                </Flex>

                <Flex p='15px 5px' mt='-1840px' mb='2020px'>
                {/* <Card p='16px' mt='20px' mb='20px'>
                    <CardBody p='5px' px='5px'>
                        Answer
                        <Flex align='center' mt='5px' mb='5px'>
                            <Flex align='center' mb='20px'> */}
                                {/* <Text
                                    noOfLines={1}
                                    fontSize='md'
                                    color='gray.400'
                                    fontWeight='400'>
                                    predict Button add
                                </Text> */}
                            {/* </Flex>
                        </Flex>
                    </CardBody>
                </Card> */}
                </Flex>

                
            </Grid>
            <button onClick={() => console.log("User Choices:", userChoices)}>Display User Choices</button>
            {/* <button onClick={handleChoices}>Check for Match</button> */}
            {/* {csvData.length > 0 && (
                <div>
                <h2>Churn Prediction:</h2>
                <p>{findChurnPrediction()}</p>
                </div>
            )} */}
            {/* <h2>User Choices</h2>
            <pre>{JSON.stringify(userChoices, null, 2)}</pre> */}
        </Flex>
    );
}

export default Predictions;