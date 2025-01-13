import { Box, Text } from '@chakra-ui/react';

interface ICard {
  mainContent: string;
  content: string;
}

export const CardInfo = ({ mainContent, content }: ICard) => {
  return (
    <Box
      backgroundColor={'white'}
      minHeight={'120px'}
      padding={8}
      borderRadius={15}
    >
      <Text
        fontSize={'2xl'}
        fontWeight={'bold'}
      >
        {mainContent}
      </Text>
      <Text>{content}</Text>
    </Box>
  );
};
