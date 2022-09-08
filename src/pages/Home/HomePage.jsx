import React from "react";
import Login from "../../Components/Login";
import Signup from "../../Components/Signup";
import {Box,Container,Tab,TabList,TabPanel,TabPanels,Tabs,
} from "@chakra-ui/react";

function Homepage() {
  return (
    <Container maxW="xl" centerContent>
     
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
export default Homepage;
