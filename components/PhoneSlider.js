import React from 'react';
import { Box, Text, Image } from 'grommet';
import Slider from 'react-slick';

const SliderImage = ({ imageLink, count, caption }) => (
  <Box align="center" pad="medium">
    <Box margin={{ bottom: 'medium' }} height="medium">
      <Image src={imageLink} height="100%" fit="contain" />
    </Box>
    <Box
      background="dark-1"
      style={{ borderRadius: '50%' }}
      pad="16px"
      width="60px"
      height="60px"
      margin={{ bottom: 'medium' }}
    >
      <Text size="large" textAlign="center" weight="bold">
        {count}
      </Text>
    </Box>
    <Box style={{ maxWidth: 240 }}>
      <Text weight="bold" size="small" textAlign="center">
        {caption}
      </Text>
    </Box>
  </Box>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: false,
};

const PhoneSlider = ({ sliderContent, large }) => {
  if (large) {
    return (
      <Box direction="row" align="start" justify="center" gap="medium">
        {sliderContent.map((slider) => (
          <SliderImage
            key={slider.caption}
            count={slider.count}
            caption={slider.caption}
            imageLink={slider.imageLink}
          />
        ))}
      </Box>
    );
  }

  return (
    <Box width="medium" alignSelf="center">
      <Slider {...sliderSettings}>
        {sliderContent.map((slider) => (
          <SliderImage
            key={slider.caption}
            count={slider.count}
            caption={slider.caption}
            imageLink={slider.imageLink}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default PhoneSlider;
