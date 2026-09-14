import React, { useState } from 'react';
import {
  Image,
  Pressable,
  View,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';

export default function Imgpress() {
  const [nome, setNome] = useState(null);

  return (
    <View style={styles.container}>
    
<Image
        style={styles.imagemGrande}
        source={nome ? nome : require('../imgs/images-solid.png')}
      />
      

      <View style={styles.linha}>
        <Pressable onPress={() => setNome(require('../imgs/char.webp'))}>
          <Image style={styles.imagemPeq} source={require('../imgs/char.webp')} />
        </Pressable>

        <Pressable onPress={() => setNome(require('../imgs/jormun.webp'))}>
          <Image style={styles.imagemPeq} source={require('../imgs/jormun.webp')} />
        </Pressable>

        <Pressable onPress={() => setNome(require('../imgs/csj.webp'))}>
          <Image style={styles.imagemPeq} source={require('../imgs/csj.webp')} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    marginBottom: 20,
    textAlign: 'center',
  },
  imagemGrande: {
    height: 200,
    width: 200,
    borderRadius: 25,
    borderWidth: 2,
    marginBottom: 20,
  },
  linha: {
    flexDirection: 'row',
    gap: 10,
  },
  imagemPeq: {
    height: 80,
    width: 80,
    borderRadius: 25,
    borderWidth: 2,
  },
});