import React from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Lorem,Button,Box} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Avatar, AvatarBadge ,Center,Text,Badge,Progress} from '@chakra-ui/react';

import {
    
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Input
  } from "@chakra-ui/react";


  

  
function Model(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
      
       <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
        
        <Drawer
          width="50%"
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>{props.Customer.id}</DrawerHeader>
  
              <DrawerBody >
              <Box
                  width="100%"
                  borderStyle="solid"
                  borderColor="gray.600"
                  borderWidth="0px"
                  marginTop="4rem"
                  height="auto"
                >
                  <Center mb="5px" mt="10px">
                    <Avatar name="Customer" src="https://bit.ly/dan-abramov" />
                  </Center>

                  <Box h="50px" mb="70px">
                    <Center>
                      <Text fontSize="1.5rem">{props.Customer.name} </Text> 
                    
                    </Center>
                   
                  </Box>
                </Box>
                <Box h="50px" mb="70px">
                    <Center>
                    <Button colorScheme="facebook" >View Received Cheques Page </Button>
                    </Center>
                   
                  </Box>
                  <Box h="50px" mb="70px">
                    <Center>
                    <Button colorScheme="facebook" >View Received Cheques Page </Button>
                    </Center>
                   
                  </Box>
                  <Box h="50px" mb="70px">
                    <Center>
                    <Button colorScheme="facebook" >View Finished Cheques Page </Button>
                    </Center>
                   
                  </Box>

              
              </DrawerBody>


  
              <DrawerFooter>
                <Button variant="outline" colorScheme="red" mr={3} onClick={onClose}>
                  Cancel
                </Button>
              
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>




       
      </>
      
    )
  }

export default Model;