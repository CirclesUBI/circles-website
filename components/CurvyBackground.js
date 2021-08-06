import { Box } from 'grommet';

export default function ({
  backgroundColor = 'white',
  children,
  ...otherProps
}) {
  return (
    <div className="curvy-background-container">
      <div className="curvy-background-top" />
      <div style={{ backgroundColor: 'white', marginTop: -120 }}>
        {children}
      </div>
      <div className="curvy-background-bottom" />
    </div>
  );
}
