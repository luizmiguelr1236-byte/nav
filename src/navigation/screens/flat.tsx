import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  Button,
  Modal,
  Pressable,
} from 'react-native';
import { Dimensions } from 'react-native';

export default function flat() {
  const [modalVisible, setModalVisible] = useState(false);
  const [dsec, setdesc] = useState('');
  const { width } = Dimensions.get('window');
  const db = [
    {
      id: 'Corredora End Closer',
      title: 'Gold Ship',
      img: require('../imgs/golshi.jpg'),
      dec: 'Gold Ship é uma corredora excêntrica e imprevisível, conhecida por seu temperamento rebelde e por causar confusão com seus oponentes. Inspirada em um dos cavalos de corrida mais malucos da história, Gold Ship é famosa por suas corridas extravagantes e por se recusar a treinar.',
    },
    {
      id: 'Corredora Pace Chaser/Late Surger',
      title: 'Matikanetannhauser',
      img: require('../imgs/mambo.jpg'),
      dec: 'Matikanetannhauser (também conhecida como Mambo) é uma corredora tímida e insegura, conhecida por sua natureza gentil e por frequentemente duvidar de si mesma. Inspirada em um cavalo de corrida real japonês, ela se destaca por sua dedicação silenciosa e esforço constante, mesmo diante das dificuldades. Apesar de seu jeito desajeitado, Matikanetannhauser conquista os outros com sua sinceridade e determinação em melhorar.',
    },
    {
      id: 'Corredora Pace Chaser',
      title: 'Agnes Tachyon',
      img: require('../imgs/agnes.jpg'),
      dec: 'Agnes Tachyon é uma corredora brilhante e excêntrica, conhecida por sua mente científica e comportamento imprevisível. Obcecada por experimentos e teorias, ela enxerga as corridas como testes para suas hipóteses, muitas vezes agindo de forma caótica e difícil de entender. Inspirada em um cavalo de corrida real japonês, Agnes Tachyon se destaca por sua inteligência incomum e por desafiar limites com suas ideias ousadas.',
    },
    {
      id: 'Corredora Front Runner',
      title: 'Sakura Bakushin O',
      img: require('../imgs/bakushin.jpg'),
      dec: 'Sakura Bakushin O é uma corredora energética e extremamente confiante, conhecida por seu entusiasmo explosivo e sua obsessão por vitórias rápidas. Sempre animada e barulhenta, ela acredita firmemente que nasceu para dominar as corridas de velocidade. Inspirada em um cavalo de corrida real japonês, Bakushin O se destaca por seu espírito incansável e por encarar qualquer desafio com otimismo inabalável.',
    },
    {
      id: 'Corredora Pace Chaser',
      title: 'Rice Shower',
      img: require('../imgs/rice.jpg'),
      dec: 'Rice Shower é uma corredora tímida e melancólica, conhecida por sua baixa autoestima e por acreditar que traz azar para aqueles ao seu redor. Apesar de sua aparência sombria e comportamento reservado, ela é profundamente gentil e deseja a felicidade dos outros acima de tudo. Inspirada em um cavalo de corrida real japonês, Rice Shower se destaca por sua determinação silenciosa e por lutar contra seus próprios medos para provar seu valor nas pistas.',
    },
    {
      id: 'Corredora Pace Chaser/Late Surger',
      title: 'El Condor Pasa',
      img: require('../imgs/condor.jpg'),
      dec: 'El Condor Pasa é uma corredora carismática e teatral, conhecida por sua personalidade extravagante e estilo inspirado em luchadores. Sempre usando uma máscara e agindo como uma heroína, ela adora chamar atenção e transformar cada corrida em um espetáculo. Inspirada no lendário cavalo de corrida El Condor Pasa, destaca-se por sua confiança, energia contagiante e por encarar as pistas como um verdadeiro show.',
    },
    {
      id: 'Corredora Late Surger',
      title: 'Haru Urara',
      img: require('../imgs/haru.png'),
      dec: 'Haru Urara é uma corredora incrivelmente otimista e perseverante, conhecida por sorrir e dar o seu melhor mesmo quando está sempre em último lugar. Inspirada na égua real que nunca venceu uma corrida profissional, Urara é adorada por sua alegria contagiante, sua atitude positiva diante de derrotas e por nunca desistir, transformando sua falta de vitórias em um símbolo de esperança e resiliência',
    },
    {
      id: 'Corredora Pace Chaser/Late Surger',
      title: 'T.M. Opera O',
      img: require('../imgs/opera.jpg'),
      dec: 'T.M. Opera O é uma corredora teatral e egocêntrica, conhecida por sua personalidade exagerada e amor próprio colossal. Ela se vê como uma verdadeira “rainha do espetáculo”, adorando se apresentar como a mais forte e bonita de todas, e trata cada corrida como se fosse uma grande performance artística. Inspirada no lendário cavalo de corrida japonês T. M. Opera O, sua atitude confiante e dramática a torna uma figura marcante tanto nas pistas quanto nas histórias da franquia',
    },
    {
      id: 'Corredora Front Runner',
      title: 'Mihono Bourbon',
      img: require('../imgs/mihono.jpg'),
      dec: 'Mihono Bourbon é uma corredora disciplinada e metódica, conhecida por sua personalidade quase “robótica” e foco absoluto em objetivos. Ela encara as corridas como se fossem operações a serem cumpridas com precisão e trabalha incansavelmente, treinando duro sem demonstrar muitas emoções. Inspirada no cavalo real que dominou várias provas no Japão, Mihono Bourbon destaca‑se por sua determinação em permanecer na frente e alcançar a vitória, mesmo que sua maneira de agir pareça fria ou mecânica para os outros.',
    },
    {
      id: 'Corredora Pace Chaser/Late Surger',
      title: 'Special Week',
      img: require('../imgs/special.jpg'),
      dec: 'Special Week é uma corredora animada e determinada, conhecida por seu coração puro, otimismo contagiante e dedicação incansável em seguir seu sonho de se tornar a melhor uma musume do Japão. Vinda de uma origem humilde no interior de Hokkaido, ela enfrenta desafios com um sorriso, nunca desiste mesmo quando as coisas ficam difíceis e inspira as outras com sua perseverança e bondade. Inspirada no cavalo de corrida japonês real de mesmo nome, Special Week representa o espírito de lutar pelo que ama com coragem e alegria.',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={db}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: '94%',
                alignSelf: 'center',
                marginVertical: 8,
                padding: 12,
                shadowColor: '#000',
                shadowOpacity: 0.2,
                shadowRadius: 6,
                elevation: 4,
                borderBottomColor: 'white',
                borderBottomWidth: 2,
              }}>
              <Image
                source={item.img}
                style={{
                  alignSelf: 'center',
                  width: '100%',
                  height: 400,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
                resizeMode="contain"
              />

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  marginBottom: 4,
                }}>
                {item.title}
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  color: '#B8B8D1',
                  marginBottom: 10,
                }}>
                {item.id}
              </Text>

              <Pressable
                onPress={() => {
                  setdesc(item.dec);
                  setModalVisible(true);
                }}
                style={({ pressed }) => ({
                  backgroundColor: '#8A7CFF',
                  paddingVertical: 10,
                  borderRadius: 8,
                  alignItems: 'center',
                })}>
                <Text
                  style={{ color: '#fff', fontSize: 15, fontWeight: '600' }}>
                  Ver Descrição
                </Text>
              </Pressable>
            </View>
          );
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={{ color: '#fff', marginBottom: 15, fontSize: 15 }}>
              {dsec}
            </Text>

            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  modalBox: {
    width: '85%',
    backgroundColor: '#1E1E2F',
    borderRadius: 12,
    padding: 20,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
