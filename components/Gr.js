import React from 'react';
import { Grommet } from 'grommet';
import theme from '../config/theme';

const Gr = (props) => (
  <Grommet theme={theme} {...props}>
    {props.children}
  </Grommet>
);

export default Gr;
