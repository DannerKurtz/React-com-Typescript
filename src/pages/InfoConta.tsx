import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const InfoConta = () => {
  return (
    <>
    <Text>Informações da conta</Text>
    <Link to={'/conta/5'}>Acessar</Link>
    </>
  )
}


