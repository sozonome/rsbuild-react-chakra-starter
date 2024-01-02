import { Flex } from '@chakra-ui/react';

import CTASection from 'lib/components/samples/CTASection';
import SomeText from 'lib/components/samples/SomeText';

const HomePage = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <SomeText />
      <CTASection />
    </Flex>
  );
};

export default HomePage;
