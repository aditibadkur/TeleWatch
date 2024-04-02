// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
import React from "react";
import { tablesProjectData, tablesTableData } from "variables/general";

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Customers
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400" >
                <Th pl="0px" borderColor={borderColor} color="gray.400" >Customer ID</Th>
                <Th borderColor={borderColor} color="gray.400" >Dependents</Th>
                <Th borderColor={borderColor} color="gray.400" >Phone Service</Th>
                <Th borderColor={borderColor} color="gray.400" >Internet Service</Th>
                <Th borderColor={borderColor}color="gray.400">Paperless Billing</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row) => {
                return (
                  <TablesTableRow
                  // <MyComponent3/>
                    name={row.customerID}
                    logo={row.Dependents}
                    email={row.PhoneService}
                    subdomain={row.InternetService}
                    domain={row.PaperlessBilling}
                    // key={index}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
      {/* <Card
        my="22px"
        overflowX={{ sm: "scroll", xl: "hidden" }}
        pb="0px"
      >
        <CardHeader p="6px 0px 22px 0px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              Anomalies Detection
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px">
                <Th pl="0px" color="gray.400" borderColor={borderColor}>
                  Customer Name
                </Th>
                <Th color="gray.400" borderColor={borderColor}>Amt spent</Th>
                <Th color="gray.400" borderColor={borderColor}>Status</Th>
                <Th color="gray.400" borderColor={borderColor}>Anomaly Probability</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesProjectData.map((row, index, arr) => {
                return (
                  <TablesProjectRow
                    name={row.name}
                    logo={row.logo}
                    status={row.status}
                    budget={row.budget}
                    progression={row.progression}
                    isLast={index === arr.length - 1 ? true : false}
                    key={index}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card> */}
    </Flex>
  );
}

export default Tables;
