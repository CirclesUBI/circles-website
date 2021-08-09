import { Box, DropButton, Text } from 'grommet';

export default function TooltipPurple({ content, label, position }) {
  const { left, top } = position;

  return (
    <DropButton
      dropContent={
        <Box
          pad="large"
          width="320px"
          className="dark-purple-gradient-background"
        >
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
