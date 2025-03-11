import React from 'react'
import { Container, HStack, Button, Flex, Text, useColorMode, Box } from '@chakra-ui/react';
import { CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box 
            position="sticky" 
            top="0"     
            zIndex="10"
            backdropFilter="blur(10px)" 
            boxShadow="sm">
            <Container maxW={"1140px"} px={4}>
                <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{ 
                    base:"column",
                    sm:"row"
                }}
                >
                    <Text>
                        <Link to={"/"}>Product Store</Link>
                    </Text>
                    <HStack spacing={2} alignItems={"center"}>
                        <Link to={"/create"}>
                            <Button>
                                <CiSquarePlus fontSize={20}/>
                            </Button>
                        </Link>
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                        </Button>
                    </HStack>

                </Flex>
            </Container>

        </Box>
    )
}

export default Navbar