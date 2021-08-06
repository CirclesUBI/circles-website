import { useLayoutEffect, useRef, useState } from 'react';
import { Box } from 'grommet';

export default function ({
  backgroundColor = 'white',
  children,
  ...otherProps
}) {
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({
    clientWidth: 900,
    containerHeight: 0,
  });

  useLayoutEffect(() => {
    if (document && containerRef.current) {
      setDimensions({
        clientWidth: document.body.clientWidth,
        containerHeight: containerRef.current.offsetHeight,
      });
    }
  }, []);
  if (!dimensions.clientWidth) {
    return null;
  }

  const newHeight = (dimensions.clientWidth * 4) / 3;
  // Because the svg image's proportions are like this to make it look like a perfect circle.

  const containerHeightNew =
    newHeight > dimensions.containerHeight
      ? newHeight
      : dimensions.containerHeight;
  // Only use the new value if it's larger and thus necessary

  const heightStyle = {
    height: containerHeightNew,
  };

  return (
    <Box
      ref={containerRef}
      width="100%"
      background={{
        image: 'url(/images/curvy-background.svg)',
        size: dimensions.clientWidth > 600 ? 'contain' : '150%',
      }}
      justify="center"
      style={heightStyle}
      {...otherProps}
    >
      {children}
    </Box>
  );
}
