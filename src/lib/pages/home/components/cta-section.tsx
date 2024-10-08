import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

const repoName = 'rsbuild-react-chakra-starter';
const repoLink = `https://github.com/sozonome/${repoName}`;

export const CTASection = () => {
  return (
    <Box textAlign="center" marginTop={8}>
      <Flex marginY={4} justifyContent="center" gridGap={2}>
        <Link
          aria-label="Deploy to Vercel"
          isExternal
          href={`https://vercel.com/import/git?s=${repoLink}`}
        >
          <Image
            src="https://vercel.com/button"
            height={8}
            alt="Vercel deploy button"
          />
        </Link>

        <Link
          aria-label="Deploy to Netlify"
          isExternal
          href={`https://app.netlify.com/start/deploy?repository=${repoLink}`}
        >
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            height={8}
            alt="Netlify deploy button"
          />
        </Link>
      </Flex>

      <Box marginY={2}>
        <Button
          marginTop={2}
          as={Link}
          href={`${repoLink}/generate`}
          isExternal
          size="sm"
        >
          Use This Template
        </Button>
      </Box>

      <Flex justifyContent="center" alignItems="center" gridGap={2}>
        <Button
          as={Link}
          href={repoLink}
          isExternal
          leftIcon={<AiFillGithub />}
          size="sm"
        >
          Open in Github
        </Button>
        <Link href={repoLink} isExternal>
          <Image
            align="center"
            src={`https://img.shields.io/github/stars/sozonome/${repoName}?style=social`}
            alt="github stars"
            height={5}
          />
        </Link>
      </Flex>
    </Box>
  );
};
