import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/RootNavigator';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  fr: { Register: 'Inscription',
        Back: 'Retour',
  },
};
i18n.locale = Localization.locale;

export default function App() {
  console.log(Localization.locale);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

