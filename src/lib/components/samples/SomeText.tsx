import { Grid, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

const SomeText = () => {
  const textSize = useBreakpointValue({
    base: 'xs',
    sm: 'sm',
  });

  return (
    <Grid gap={2} textAlign="center">
      <Heading
        as="h2"
        fontSize={{ base: '2xl', sm: '3xl' }}
        bgGradient="linear(to-br, teal.200, blue.600)"
        bgClip="text"
      >
        cra-chakra-ts
      </Heading>
      <Text fontSize={textSize} color="gray.500">
        This is a create-react-app project with Chakra-UI and TypeScript setup.
      </Text>
    </Grid>
  );
};

export default SomeText;
