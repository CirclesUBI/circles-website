import { useState } from 'react';
import {
  Accordion,
  AccordionPanel,
  Box,
  Heading,
  Grommet,
  Text,
} from 'grommet';
import { FormAdd, FormClose } from 'grommet-icons';

const customAccordionTheme = {
  global: {
    font: {
      family: "'NotoSans-Regular', sans-serif;",
    },
    colors: {
      brand: '#D12D5F',
      focus: 'none',
    },
  },
  accordion: {
    border: undefined,
  },
  heading: {
    weight: 800,
    font: {
      family: "'OstrichSansHeavy', sans",
    },
  },
};

const accordionStyle = {
  padding: '14px 52px',
  margin: 6,
  borderRadius: 8,
};

export default function AccordionWidget({ content }) {
  const [open, setOpen] = useState(false);

  return (
    <Grommet theme={customAccordionTheme}>
      <Accordion
        activeIndex={open ? 0 : null}
        alignSelf="center"
        className="dark-purple-gradient-background"
        style={accordionStyle}
      >
        <AccordionPanel
          header={
            <Box onClick={() => setOpen(!open)} align="center">
              <Heading
                textAlign="center"
                level={2}
                margin={{ top: 'small', bottom: 'none' }}
              >
                {content.title}
              </Heading>
              <Box height="24px">{!open && <FormAdd color="white" />}</Box>
            </Box>
          }
        >
          <Box width="medium">
            <Text size="small">{content.text}</Text>
            <Box
              onClick={() => setOpen(!open)}
              direction="row"
              justify="center"
              pad="medium"
            >
              <FormClose color="white" />
            </Box>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Grommet>
  );
}
