const { Box, Image, Text } = require("@chakra-ui/react")


const AgentCard = ({name, image, description, title}) => {
    return(
       <Box backgroundColor='#f1f1f14a' padding='2rem' display='flex' textAlign='center' flexDirection='column' marginBottom={{base: '1rem', sm: '0'}} width='380px' justifyContent='center' alignItems='center' >
        <Image src={image} width='10rem' height='10rem' objectFit='cover' borderRadius='full' shadow='md'   />
        <Text color="blue.400" fontSize="xl" fontWeight='bold'>{name}</Text>
        <Text fontSize='lg' color='blue.600'>{title}</Text>
        <Text fontSize='md' fontWeight='light' noOfLines='2' marginTop='1rem' color='gray.600' >{description}</Text>
       </Box>
       )
}

export default AgentCard