import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/routes';


export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

