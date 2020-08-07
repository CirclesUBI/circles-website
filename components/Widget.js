import React from 'react';
import { Box, Text, Image } from 'grommet';

const Widget = ({
  imageLink,
  title,
  content,
  imageWidth = 'small',
  imageHeight = '100px',
}) => {
  return (
    <Box
      pad="medium"
      elevation="small"
      align="start"
      margin="large"
      style={{ borderRadius: 8 }}
    >
      <Image
        src={imageLink}
        width={imageWidth}
        height={imageHeight}
        margin={{ bottom: 'large' }}
      />
      <Text weight="bold" margin={{ bottom: 'medium' }}>
        {title}
      </Text>
      <Text size="small">{content}</Text>
    </Box>
  );
};

export default Widget;
