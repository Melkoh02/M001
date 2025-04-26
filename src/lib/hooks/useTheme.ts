import {useStore} from './useStore';

export const useTheme = () => {
  const {themeStore} = useStore();

  return {
    currentTheme: themeStore.currentTheme,
    setTheme: themeStore.setTheme,
    toggleTheme: themeStore.toggleTheme,
  };
};
