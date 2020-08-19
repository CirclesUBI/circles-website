import React from 'react';
import { Box, Text, Image } from 'grommet';
import Slider from 'react-slick';

const sliderContent = [
  {
    count: '1',
    caption: 'Sign up at Circles.Garden',
    imageLink: '/images/1_Login.svg',
  },
  {
    count: '2',
    caption: 'Ask for Trust from Three People',
    imageLink: '/images/2_Profile.svg',
  },
  {
    count: '3',
    caption: 'Receive your Circles basic income',
    imageLink: '/images/3_Home.svg',
  },
  {
    count: '4',
    caption: 'Use Circles in the Marketplace and locally!',
    imageLink: '/images/4_Marketplace.svg',
  },
];

const ImagePhoneBgrd = ({ imageLink, count, caption }) => {
  return (
    <Box
      align="center"
      pad="medium"
      margin="large"
      overflow="hidden"
      flex={{ grow: 0, shrink: 0 }}
      wrap
    >
      <Box
        background={{
          image: `url('/images/phone-frame.svg')`,
          size: 'contain',
          repeat: 'no-repeat',
          position: 'center',
        }}
        align="center"
        pad={{ top: 'large', left: '10px', right: '10px' }}
        margin={{ bottom: 'large' }}
        height="380px"
        width="200px"
        overflow="hidden"
      >
        <Box>
          <Image
            src={imageLink}
            height="100%"
            fit="cover"
            style={{
              borderRadius: 32,
            }}
          />
        </Box>
      </Box>
      <Box
        background="dark-1"
        style={{ borderRadius: '50%' }}
        pad="medium"
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
};

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
};

const PhoneSlider = ({ large }) => {
  const spreadImages = () => {
    return sliderContent.map((slider) => (
      <SliderImage
        key={slider.caption}
        count={slider.count}
        caption={slider.caption}
        imageLink={slider.imageLink}
      />
    ));
  };

  if (large) {
    return (
      <Box direction="row" align="start" justify="center" gap="medium">
        {spreadImages()}
      </Box>
    );
  }

  return (
    <Box width="medium" alignSelf="center">
      <Slider {...sliderSettings}>{spreadImages()}</Slider>
    </Box>
  );
};

export default PhoneSlider;
