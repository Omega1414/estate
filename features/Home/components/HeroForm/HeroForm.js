import { Box, Button, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { saveAs } from "file-saver";



const HeroForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const saveFile = () => {
        saveAs(
            "https://github.com/Omega1414/portfolio4/raw/main/src/Assets/hazircv.pdf",
            "example.pdf"
        );
    };
    return (

        <Box width='100%' padding='2rem' borderRadius='sm' backgroundColor='white' color='gray.700' >
            <Text fontSize='xl' fontWeight='bold'>Pulsuz PDF yüklə</Text>
            <Text fontSize='lg'>Yükləmək üçün aşağıdakı düyməyə klikləyin</Text>




            <Button colorScheme='blue' width='100%' fontSize='xl' padding='2rem' marginTop='2rem' onClick={saveFile} >
                PDF Yüklə
            </Button>


        </Box>

    )
}

export default HeroForm