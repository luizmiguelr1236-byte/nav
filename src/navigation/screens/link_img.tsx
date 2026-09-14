import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';

function Profile() {
  const [nome, setNome] = useState('');
  const [mostrar, setMostrar] = useState(false);
  return (
    <View style={x.container}>
      <Text>link da img:</Text>
      <TextInput
        style={x.input}
        placeholder="Digite a Url da imagem"
        onChangeText={(text) => setNome(text)}
      />

      <Button title="Abrir imagem" onPress={() => setMostrar(true)} />

      {mostrar && nome !== '' && (
        <Image
          source={{ uri: nome }}
          style={{
            width: 300,
            height: 200,
            borderColor: 'black',
            borderWidth: 5,
            marginTop: 10,
            borderRadius: 30,
          }}
        />
      )}
    </View>
  );
}

export default Profile;
const x = StyleSheet.create({
  input: {
    borderColor: 'Gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 4,
    margin: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  }
});
