import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.infos}>
        <Text style={styles.tituloText}>Alan Turing</Text>
        <Image 
          style ={styles.imagem}
          source = {require('./assets/alanTuring.jpg')}>
        </Image>
      </View>

      <ScrollView style={styles.area}>
        <Text style={styles.texts}>
        Alan Mathison Turing nasceu no dia 23 de junho de 1912, em um bairro residencial de Londres, capital da Inglaterra. Seu pai, Julius Mathison Turing, era um oficial que trabalhava na Madras Presidency.  região administrativa criada pelos britânicos na Índia britânica.

 Alan Turing, considerado atualmente como o pai da computação, foi um matemático e criptógrafo inglês considerado, por meio de suas ideias, foi possível desenvolver o que chamamos hoje de computador. Turing também ficou muito conhecido como um dos responsáveis por decifrar o código utilizado pelas comunicações nazistas durante a Segunda Guerra Mundial. Por meio do seu trabalho, foi desenvolvida uma máquina conhecida como “bomba eletromecânica” (The Bombe, em inglês), que decifrou o código da máquina Enigma utilizado pelos alemães, e permitiu que os Aliados tivessem acesso a informações privilegiadas ao longo da guerra.

Durante sua infância, Turing estudou em diversas escolas, tais como Hazelhurst Preparatory School e Sherborne School. Na Sherborne ingressou quando tinha 13 anos, e um episódio peculiar marcou sua entrada nela. No seu primeiro dia de aula, aconteceu uma greve geral na Grã-Bretanha que o impediu ir de trem. Turing resolveu, em sua bicicleta, percorrer os 100 km que separavam a escola de sua casa. Alguns estudos feitos sobre a vida de Turing mostram que, em Sherborne, ele logo demonstrou grande interesse pela matemática, e, apesar de ser reconhecido atualmente como um gênio, algumas de suas notas eram apenas regulares. Em Sherborne, conheceu Christopher Morcom, o qual muitos acreditam ter sido seu primeiro amor. Morcom, porém, faleceu em 1930, em decorrência de tuberculose bovina. A essa altura, Turing tinha 18 anos de idade.


O maior legado deixado pelo matemático Alan Turing é, sem dúvidas, a invenção da máquina de Turing. Esta é um modelo teórico que pode ser usado para implementar todos os aspectos lógicos e matemáticos de um computador, independentemente de como ele venha a ser construído (mecânica ou eletronicamente, por exemplo).

Além de ter construído as bases da computação moderna, Turing também desenvolveu os primeiros testes capazes de distinguir a inteligência artificial da inteligência humana. Atualmente os testes de Turing são usados em diversos sites e dispositivos, promovendo maior segurança para os seus usuários.
Turing morreu em 1954, provavelmente tendo cometido suicídio. 

        </Text>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30,
  },

  infos: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },

  tituloText : {
    color: '#6b3601',
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: '',
    maxHeight:30,
  },

  imagem:{
    width:100,
    height:150,
    marginBottom: 20,
    borderRadius: 10,
    },

  area:{
    backgroundColor: '#6b3601',
    color: '#ff9',
    borderRadius: 10,
    fontFamily: 'arial',
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'justify',
    width: '90%',
    maxHeight: '64%',
    },

    texts:{
      color: '#fff',
    },

});
