import { deepFreeze, deepMerge } from 'grommet/utils';
import { base } from 'grommet';

const mainColor = '#660F33';

const colors = {
  background: 'hsla(88, 62%, 90%, 0.1)',
  brand: '#CC1E66',
  brand2: '#D12D5F',
  gradient:
    'linear-gradient(135deg, rgba(102,15,51,1) 0%, rgba(204,30,102,1) 100%)',
  active: {
    light: '#57b457',
    dark: '#52b7f9',
  },
  control: {
    dark: '#52b7f9',
    light: '#4a984a',
  },
  focus: 'none',
  'accent-1': '#367bd5',
  'accent-2': '#5ec660',
  'accent-3': '#d4293d',
  'accent-4': '#9C27B0',
  'neutral-1': '#795548',
  'neutral-2': '#CDDC39',
  'neutral-3': '#607D8B',
  'neutral-4': '#9cb6d7',
  'neutral-5': '#FF9800',
  // 'dark-1': 'rgba(0, 0, 0, .8)',
  // 'dark-2': 'rgba(20, 20, 20, .8)',
  // 'dark-3': 'rgba(50, 50, 50, .8)',
};

var baseSpacing = 16;

const theme = deepFreeze(
  deepMerge(base, {
    global: {
      breakpoints: {
        small: {
          size: {
            none: '0',
            hair: '1px',
            xxsmall: '2px',
            xsmall: baseSpacing / 8 + 'px',
            small: baseSpacing / 4 + 'px',
            medium: baseSpacing / 2 + 'px',
            large: baseSpacing + 'px',
            xlarge: baseSpacing * 2 + 'px',
          },
        },
      },
      colors: colors,
      font: {
        family: "'NotoSans-Regular', sans-serif;",
        size: '16px',
      },
      edgeSize: {
        none: '0',
        hair: '1px',
        xxsmall: baseSpacing / 8 + 'px',
        xsmall: baseSpacing / 4 + 'px',
        small: baseSpacing / 2 + 'px',
        medium: baseSpacing + 'px',
        large: baseSpacing * 2 + 'px',
        xlarge: baseSpacing * 4 + 'px',
      },
      hover: {
        background: {
          light: '#c8c8c8',
          dark: '#333333',
        },
        color: {
          light: '#333333',
          dark: '#f8f8f8',
        },
      },
      selected: {
        background: '#635d60',
        color: '#f8f8f8',
      },
    },
    icon: {
      focus: 'none',
    },
    text: {
      xsmall: { size: '10px', height: 1.5 },
      small: { size: '14px', height: 1.43 },
      medium: { size: '18px', height: 1.375 },
      large: { size: '24px', height: 1.167 },
      xlarge: { size: '28px', height: 1.1875 },
      xxlarge: { size: '32x', height: 1.125 },
    },
    heading: {
      weight: 800,
      font: {
        family: "'OstrichSansHeavy', sans",
      },
      level: {
        1: {
          small: {
            size: '42px',
            height: '40px',
            maxWidth: '816px',
          },
          medium: {
            size: '60px',
            height: '56px',
            maxWidth: '1200px',
          },
          large: {
            size: '82px',
            height: '88px',
            maxWidth: '1968px',
          },
          xlarge: {
            size: '114px',
            height: '120px',
            maxWidth: '2736px',
          },
        },
      },
      extend: {
        maxWidth: 1280,
      },
    },
    icon: {
      size: {
        xsmall: '14px',
      },
    },
    button: {
      border: {
        radius: '8px',
        width: 0,
        color: {
          dark: '#fbf9ff',
          light: '#28599e',
        },
      },
      // color: { dark: undefined, light: undefined }
      primary: {
        color: {
          dark: '#0093ff',
          light: '#316cbe',
        },
      },
    },
    anchor: {
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: '#f7efff',
        light: '#275596',
      },
    },
    checkBox: {
      border: {
        width: '2px',
      },
      check: {
        radius: '4px',
        thickness: '4px',
      },
    },
    rangeInput: {
      track: {
        color: {
          dark: '#3a82b1',
          light: '#52b7f9',
        },
      },
    },
    paragraph: {
      small: {
        size: '14px',
        height: '18px',
      },
      medium: {
        size: '18px',
        height: '26px',
      },
      extend: {
        marginTop: 8,
        marginBottom: 8,
        maxWidth: 480,
      },
    },
  })
);

export default theme;
