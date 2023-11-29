import { Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar';

const ErrorPage = () => {

    const error = useRouteError();

  return (
   <>
   <NavBar/>
   <Heading>Oppsss</Heading>
   <Text>{isRouteErrorResponse(error)?"Invalid Route": "Hmm Something is happens in our end"}</Text>
   </>
  )
}

export default ErrorPage;