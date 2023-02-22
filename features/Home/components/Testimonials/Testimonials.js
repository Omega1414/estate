import TestimonalCard from "./components/TestimonalCard"
import { testimonials } from "./testimonalsConts"

const { Box, Text, SimpleGrid } = require("@chakra-ui/react")



const Testimonials = () => {
    return(
        <Box backgroundColor='blue.50'>
            <Box maxWidth='1280px' margin='0 auto' paddingY={{base: '3rem', sm:'6rem'}}>
                <Text fontSize={{base: '4xl', sm: '5xl'}} lineHeight='shorter' fontWeight='light' paddingX='2rem' textAlign='center'>Testimonials</Text>
                <Text fontSize='2xl' marginTop='1rem' marginBottom='3rem' fontWeight='light' paddingX='2rem' textAlign='center'>Müştərilərimizin bizim barədə rəyləri</Text>
                <SimpleGrid columns='3' minChildWidth='300px' gap={{base: '0.5rem', sm: "2.5rem"}}>
                    {testimonials.map((testimonial) => (
                       <TestimonalCard key={testimonial.name} {...testimonial} />
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default Testimonials