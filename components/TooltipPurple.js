import { Box, DropButton, Text } from 'grommet';

export default function TooltipPurple({
  content,
  label,
  position,
  large = false,
}) {
  const { left, top } = position;

  return (
    <DropButton
      dropContent={
        <Box pad="large" background="brand" width="320px">
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
