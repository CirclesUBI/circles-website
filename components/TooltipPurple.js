import { Box, DropButton, Text } from 'grommet';

const tooltipStyle = {
  color: '#fff',
  background: 'rgb(102,15,51)',
  background:
    'linear-gradient(135deg,  rgba(204,30,102,1) 0%, rgba(102,15,51,1) 100%)',
};

export default function TooltipPurple({ content, label, position }) {
  const { left, top } = position;

  return (
    <DropButton
      dropContent={
        <Box pad="large" width="320px" style={tooltipStyle}>
          <Text size="small" color="white" weight="bold">
            {content.text}
          </Text>
        </Box>
      }
      dropProps={
        ({ align: { top: 'bottom' } },
        { round: { corner: 'bottom-right' } },
        { elevation: 'medium' },
        { style: { borderBottomRightRadius: 60 } })
      }
      style={
        position && {
          position: 'absolute',
          left,
          top,
        }
      }
    >
      {label}
    </DropButton>
  );
}
