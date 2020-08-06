import React from 'react';
import { Grommet } from 'grommet';
import theme from '../config/theme';

const Gr = (props) => (
  <Grommet theme={theme} {...props}>
    {/* <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@500;800&family=Inknut+Antiqua:wght@700&display=swap');
    `}</style> */}
    {props.children}
  </Grommet>
);

export default Gr;
