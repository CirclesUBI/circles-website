import { Box, Button, Text } from 'grommet';
import { i18n } from '../i18n';

const LangSwitcher = ({ large }) => (
  <Box alignSelf="end" pad={{ right: 'medium' }}>
    <Button
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
      label={
        <Text size="small" color="white">
          {i18n.language === 'en' ? 'Deutsch' : 'English'}
        </Text>
      }
      hoverIndicator={false}
      plain
    />
  </Box>
);

export default LangSwitcher;
