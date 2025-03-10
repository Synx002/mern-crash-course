import React from 'react'
import { Container, HStack, Button, Flex, Text, useColorMode } from '@chakra-ui/react';
import { CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
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
    )
}

export default Navbar