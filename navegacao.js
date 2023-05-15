import { createStackNavigator } from '@react-navigation/stack';
import Filmes from './Componentes/FilmesScreen/Filmes';
import Series from './Componentes/SeriesScreen/Series';
import Desenhos from './Componentes/DesenhosScreen/Desenhos';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Filmes" component={Filmes} />
          <Stack.Screen name="Séries" component={Series} />
          <Stack.Screen name="Desenho" component={Desenhos} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;