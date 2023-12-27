import { useContext } from 'react';
import { ThemeContext } from '../store/context/ThemeContext';
import { colors } from '../styles/colors';

const useThemeColors = () => {
  const { theme } = useContext(ThemeContext);

  return colors[theme];
};

export default useThemeColors;