import ReactDOM from 'react-dom/client'
import App from './1app/App.tsx'
import './1app/styles/index.css'
import {ChakraProvider} from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <ChakraProvider>
            <App/>
        </ChakraProvider>,
)
