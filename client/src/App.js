import * as React from 'react'
import { extendTheme,ChakraProvider } from '@chakra-ui/react'
import Main from './Pages/Main';
import Mainroute from './Routes/Mainroute';
import './App.css';

const colors = {
  brand: {
    50: '#E6FFFA',
    100: '#B2F5EA',
    300: '#4FD1C5',
  },
}

const theme = extendTheme({ colors })

function App() {
  return (
    <ChakraProvider>
      {/* <Main/> */}
      <Mainroute/>
    </ChakraProvider>
  );
}

export default App;