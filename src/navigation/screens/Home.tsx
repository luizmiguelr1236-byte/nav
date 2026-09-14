import { Button, Text } from '@react-navigation/elements';
import { StyleSheet, View , Image} from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <h2>Bem vindo!!!</h2> 
      <Text>Este é o seu aplicativo de navegação.</Text>
      <Text>Use a barra de navegação para explorar as diferentes telas.</Text>
     <Image source={require('../imgs/arrow-down-long-solid.png')} style={{width: 100, height: 100,margin: 10}} />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
