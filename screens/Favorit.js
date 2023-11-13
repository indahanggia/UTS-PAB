import React, { Component } from 'react';
import { NativeBaseProvider, Box, Text, Center, Image } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

class Favorit extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <Center
          bg="#fefce8"
          size="100%"
          flexDirection="row"
          alignItems="flex-end">
          <Box size="95%">
            <Box
              mt="10"
              borderRadius="20"
              alignSelf="center"
              alignItems="center"
              width="60%"
              bg="#fb923c">
              <Text
                color="white"
                fontFamily="Poppins"
                fontSize="40"
                fontWeight="bold">
                Favorit
              </Text>
            </Box>
            <Box
              flexDirection="row"
              mt="5"
              borderRadius="20"
              alignSelf="center"
              alignItems="center"
              width="90%"
              height="17%"
              bg="#fb923c">
              <Image
                ml="5"
                size="100"
                borderRadius={10}
                source={require('../assets/1.jpg')}
              />
              <Text
                ml="3"
                color="white"
                fontFamily="Poppins"
                fontSize="25"
                fontWeight="bold">
                Mie Nyemek
              </Text>
              <Box ml="3" bg="white" p="1" borderRadius="100">
              <MaterialIcons name="favorite"  size={24} color="#fb923c" />
              </Box>
            </Box>
            <Box
              flexDirection="row"
              mt="5"
              borderRadius="20"
              alignSelf="center"
              alignItems="center"
              width="90%"
              height="17%"
              bg="#fb923c">
              <Image
                ml="5"
                size="100"
                borderRadius={10}
                source={require('../assets/2.jpeg')}
              />
              <Text
                ml="3"
                color="white"
                fontFamily="Poppins"
                fontSize="23"
                fontWeight="bold">
                Seblak Pedas
              </Text>
              <Box ml="3" bg="white" p="1" borderRadius="100">
              <MaterialIcons name="favorite"  size={24} color="#fb923c" />
              </Box>
            </Box>
          </Box>
        </Center>
      </NativeBaseProvider>
    );
  }
}

export default Favorit;
