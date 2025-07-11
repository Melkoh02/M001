import React, {useEffect, useMemo, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, ViewStyle} from 'react-native';
import {List, Modal, Portal, Searchbar, TextInput} from 'react-native-paper';
import {FormikSelectInputProps} from '../../lib/types/formik.ts';
import {useTheme} from '../../lib/hooks/useAppTheme.ts';

export default function FormikSelectInput(props: FormikSelectInputProps) {
  const {
    field,
    form,
    options,
    placeholderText,
    defaultValue,
    onSearch,
    style,
    ...rest
  } = props;
  const theme = useTheme();

  useEffect(() => {
    if (
      defaultValue != null &&
      (field.value === undefined || field.value === '')
    ) {
      form.setFieldValue(field.name, defaultValue);
    }
  }, []);

  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    onSearch?.(text);
  };

  // if onSearch is provided, parent drives `options`; otherwise filter locally
  const filteredOptions = useMemo(() => {
    if (onSearch) return options;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return options;
    return options.filter(o => o.value.toLowerCase().includes(q));
  }, [options, searchQuery, onSearch]);

  const selected = options.find(o => o.id === field.value);
  const displayValue = selected ? selected.value : '';

  return (
    <>
      <Pressable onPress={showModal}>
        <TextInput
          {...rest}
          label={placeholderText}
          value={displayValue}
          editable={false}
          style={[
            {backgroundColor: theme.colors.surface, paddingHorizontal: 0},
            style,
          ]}
          right={
            <TextInput.Icon
              icon={selected ? 'close' : visible ? 'menu-up' : 'menu-down'}
              onPress={() => {
                if (selected) {
                  form.setFieldValue(field.name, '');
                  form.setFieldTouched(field.name, true);
                } else {
                  visible ? hideModal() : showModal();
                }
              }}
            />
          }
        />
      </Pressable>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={[
            styles.modal,
            {backgroundColor: theme.colors.surface},
          ]}>
          <Searchbar
            placeholder="Search…"
            onChangeText={handleSearchChange}
            value={searchQuery}
            style={styles.search}
          />
          <ScrollView>
            {filteredOptions.map(opt => (
              <List.Item
                key={opt.id}
                title={opt.value}
                onPress={() => {
                  form.setFieldValue(field.name, opt.id);
                  form.setFieldTouched(field.name, true);
                  hideModal();
                }}
              />
            ))}
          </ScrollView>
        </Modal>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 20,
    padding: 10,
    borderRadius: 8,
  } as ViewStyle,
  search: {
    marginBottom: 10,
  },
});
