import BaseModal from '../molecules/modal.tsx';
import {Button} from 'react-native-paper';
import {toggleLanguage} from '../../lib/helpers/toggleLanguage.ts';
import {StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useStore} from '../../lib/hooks/useStore.ts';
import {LanguageModalProps} from '../../lib/types/selectLanguageModal.ts';

export default function SelectLanguageModal({
  isVisible,
  onDismiss,
}: LanguageModalProps) {
  const {t} = useTranslation();
  const {languageStore} = useStore();

  return (
    <BaseModal
      title={t('drawer.selectLanguageModal.title')}
      content={
        <Button
          mode="contained-tonal"
          onPress={() => toggleLanguage(languageStore)}
          style={styles.button}>
          {t('settings.switchLanguage')}
        </Button>
      }
      isVisible={isVisible}
      onDismiss={onDismiss}
      actions={[
        {
          text: t('common.cancel'),
          onPress: onDismiss,
        },
        {
          text: t('common.confirm'),
          onPress: onDismiss,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  button: {marginTop: 16},
});
