import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.box}>
      <View style={styles.topo}>
        <View style={styles.icon}>
          <Ionicons name="arrow-back" size={25} color="#696969"/>
        </View>
        <View style={styles.barraPesquisa}>
          <Ionicons name="search" size={17} color="#696969" />
          <Text>Alan Turing</Text>
        </View>
      </View>
      <View style={styles.painel}></View>
        <Image 
            style ={styles.imagem}
            source = {require('./assets/alanTuring.jpg')}>
        </Image>
        <Image 
            style ={styles.circulo}
            source = {require('./assets/alanTuring.jpg')}>
        </Image>
      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={styles.tituloNome}>Alan Turing</Text>
        </View>
        <View style={styles.desc}>
          <Text>Matemático e Cientista da Computação | Pioneiro da Inteligência Artificial e da Criptografia</Text>
        </View>
        <View style={styles.universidade}>
          <Text>Government Code and Cypher School (GC&CS) - Bletchley Park</Text>
          <Text>Inglaterra</Text>
        </View>
        <View style={styles.conexao}>
          <Text>+ de 500 </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
  topo:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  icon:{
    width: '15%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  barraPesquisa:{
    width: '82%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    backgroundColor: '#d3dff0',
    paddingLeft: 5,
    gap: 5,
  },
  container:{
    width:'100%',
    padding:10,
    gap: 15,
  },
  imagem:{
    width:'100%',
    height:'18%',
  },
  circulo:{
    width: 90,
    height: 90,
    marginLeft: 15,
    borderRadius: '100%',
    borderColor: '#FFF',
    borderWidth: 4,
    borderStyle: 'solid',
    top: -39,
  },
  tituloNome:{
    fontSize: 20,
    fontWeight: 'bold',
  },
});
