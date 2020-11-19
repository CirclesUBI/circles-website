import { Box, Menu } from 'grommet';
import { i18n } from '../i18n';
import { FormDown } from 'grommet-icons';

const activeLanguages = ['en', 'de'];

const LangSwitcher = () => {
  if (!i18n || !i18n.language) {
    return null;
  }

  return (
    <Box alignSelf="end" pad="small">
      <Menu
        label={i18n.language.toUpperCase()}
        items={activeLanguages.map((lang) => ({
          label: lang.toUpperCase(),
          onClick: () => i18n.changeLanguage(lang),
        }))}
        size="small"
        color="white"
        icon={<FormDown color="white" size="small" />}
      />
    </Box>
  );
};

export default LangSwitcher;
