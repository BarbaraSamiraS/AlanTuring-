//Fonts
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';



export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.box}>
      <View style={styles.topo}>
        <View style={styles.icon}>
          <Ionicons name="arrow-back" size={25} color="#696969"/>
        </View>
        <View style={styles.barraPesquisa}>
          <Ionicons name="search" size={17} color="#696969" />
          <Text>Alan Turing</Text>
        </View>
      </View>
      <View style={styles.painel}>
        <Image 
            style ={styles.imagem}
            source = {require('./assets/painel.jpg')}>
        </Image>
        <Image 
            style ={styles.circulo}
            source = {require('./assets/alanTuring.jpg')}>
        </Image>
      </View>
      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={styles.tituloNome}>Alan Turing</Text>
        </View>
        <View style={styles.desc}>
          <Text>Matemático e Cientista da Computação | Pioneiro da Inteligência Artificial e da Criptografia</Text>
        </View>
        <View style={styles.universidade}>
          <Text style={styles.txtTrabalho}>Government Code and Cypher School (GC&CS) - Bletchley Park</Text>
          <Text style={styles.txtLocal}>Inglaterra</Text>
        </View>
        <Text style={styles.txtConexao}>+ de 500 conexões</Text>
        <View style={styles.conexao}>
          <View style={styles.botoesConexao}>
            <View style={styles.enviar}>
              <FontAwesome name="send" size={11} color="white" />
              <Text style={styles.txtEnviar}>Enviar mensagem</Text>
            </View>
            <View style={styles.seguir}>
              <Text style={styles.txtSeguir}>+ Seguir</Text>
            </View>
            <View style={styles.more}>
              <Text style={styles.txtMore}>...</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.faixa}></View>
      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={styles.subtitulo}>Sobre</Text>
        </View>
        <ScrollView style={styles.sobre}>
            <Text style={styles.descSobre}>
              Alan Mathison Turing nasceu no dia 23 de junho de 1912, em um bairro residencial de Londres, capital da Inglaterra. Seu pai, Julius Mathison Turing, era um oficial que trabalhava na Madras Presidency.  região administrativa criada pelos britânicos na Índia britânica.
              Alan Turing, considerado atualmente como o pai da computação, foi um matemático e criptógrafo inglês considerado, por meio de suas ideias, foi possível desenvolver o que chamamos hoje de computador. Turing também ficou muito conhecido como um dos responsáveis por decifrar o código utilizado pelas comunicações nazistas durante a Segunda Guerra Mundial. Por meio do seu trabalho, foi desenvolvida uma máquina conhecida como “bomba eletromecânica” (The Bombe, em inglês), que decifrou o código da máquina Enigma utilizado pelos alemães, e permitiu que os Aliados tivessem acesso a informações privilegiadas ao longo da guerra.
              Durante sua infância, Turing estudou em diversas escolas, tais como Hazelhurst Preparatory School e Sherborne School. Na Sherborne ingressou quando tinha 13 anos, e um episódio peculiar marcou sua entrada nela. No seu primeiro dia de aula, aconteceu uma greve geral na Grã-Bretanha que o impediu ir de trem. Turing resolveu, em sua bicicleta, percorrer os 100 km que separavam a escola de sua casa. Alguns estudos feitos sobre a vida de Turing mostram que, em Sherborne, ele logo demonstrou grande interesse pela matemática, e, apesar de ser reconhecido atualmente como um gênio, algumas de suas notas eram apenas regulares. Em Sherborne, conheceu Christopher Morcom, o qual muitos acreditam ter sido seu primeiro amor. Morcom, porém, faleceu em 1930, em decorrência de tuberculose bovina. A essa altura, Turing tinha 18 anos de idade.
              O maior legado deixado pelo matemático Alan Turing é, sem dúvidas, a invenção da máquina de Turing. Esta é um modelo teórico que pode ser usado para implementar todos os aspectos lógicos e matemáticos de um computador, independentemente de como ele venha a ser construído (mecânica ou eletronicamente, por exemplo).
              Além de ter construído as bases da computação moderna, Turing também desenvolveu os primeiros testes capazes de distinguir a inteligência artificial da inteligência humana. Atualmente os testes de Turing são usados em diversos sites e dispositivos, promovendo maior segurança para os seus usuários.
              Turing morreu em 1954, provavelmente tendo cometido suicídio. 
            </Text>
        </ScrollView>
        <View style={styles.competencias}>
          <View style={styles.diamante}>
            <Ionicons name="diamond-outline" size={20} color="black" />
          </View>
          <View style={styles.txtCompetencias}>
            <Text style={styles.tituloCompetencia}>Principais competencias</Text>
            <Text style={styles.descCompetencia}>Matemática Avançada • Criptografia • Lógica e Computação • Inteligência Artificial</Text>
          </View>
          <View style={styles.arrow}>
            <Ionicons name="arrow-forward" size={18} color="black" />
          </View>
        </View>
      </View>

      <View style={styles.faixa}></View>

      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={styles.subtitulo}>Formação Acadêmica</Text>
        </View>
        <View style={styles.formacoes}>
          <View style={styles.academias}>
            <Image 
              style ={styles.uni}
              source = {require('./assets/cambridge.png')}>
            </Image>
            <View style ={styles.infoUniversidade}>
              <Text style={styles.tituloCompetencia}>Universidade de Cambridge</Text>
              <Text style={styles.descCompetencia}>Bacharelado em Matemática </Text>
              <Text style={styles.txtLocal}>1931-1934</Text>
              <Text style={styles.descUniversidade}>Graduado com honras, destacou-se por seu trabalho em lógica matemática e teoria dos números.</Text>
            </View>
          </View>
          <View style={styles.academias}>
            <Image 
              style ={styles.uni}
              source = {require('./assets/princeton.png')}>
            </Image>
            <View style ={styles.infoUniversidade}>
              <Text style={styles.tituloCompetencia}>Universidade de Princeton</Text>
              <Text style={styles.descCompetencia}>Doutorado em Matemática </Text>
              <Text style={styles.txtLocal}>1936-1938</Text>
              <Text style={styles.descUniversidade}>Trabalhou sob a orientação de Alonzo Church, publicando pesquisas inovadoras sobre computabilidade e lógica, Além de definir o conceito de Máquina de Turing, base da computação moderna.</Text>
            </View>
          </View>
        </View>
      </View>
      <View style ={styles.maisInfos}>
        <Text style ={styles.txtMaisInfos}> Exibir mais 2 itens de formação academica</Text>
        <Ionicons name="arrow-forward" size={15} color="black" />
      </View>

      <View style={styles.faixa}></View>

      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={styles.subtitulo}>Experiências e Contribuições</Text>
        </View>
        <View style={styles.formacoes}>
          <View style={styles.academias}>
            <Image 
              style ={styles.uni}
              source = {require('./assets/princeton.png')}>
            </Image>
            <View style ={styles.infoUniversidade}>
              <Text style={styles.tituloCompetencia}>Máquina de Turing</Text>
              <Text style={styles.descCompetencia}>Universidade de Princeton (EUA) </Text>
              <Text style={styles.txtLocal}>1936</Text>
              <Text style={styles.descUniversidade}>Desenvolveu o conceito teórico da Máquina de Turing, um modelo matemático capaz de simular qualquer algoritmo computacional.</Text>
              <View style={styles.imgExperiencia}>
                <Image 
                  style ={styles.fotos}
                  source = {require('./assets/painel.jpg')}>
                </Image>
                <Image 
                  style ={styles.fotos}
                  source = {require('./assets/maquina.jpg')}>
                </Image>
              </View>
            </View>
          </View>
          <View style={styles.academias}>
            <Image 
              style ={styles.uni}
              source = {require('./assets/manchester.png')}>
            </Image>
            <View style ={styles.infoUniversidade}>
              <Text style={styles.tituloCompetencia}>Artigo "Computing Machinery and Intelligence" (Jogo da Imitação)</Text>
              <Text style={styles.descCompetencia}>Universidade de Manchester (Reino Unido) </Text>
              <Text style={styles.txtLocal}>1950</Text>
              <Text style={styles.descUniversidade}>Publicou um artigo fundamental sobre inteligência artificial, propondo o famoso Teste de Turing.</Text>
              <View style={styles.imgExperiencia}>
                <Image 
                  style ={styles.fotos}
                  source = {require('./assets/artigo.png')}>
                </Image>
                <Image 
                  style ={styles.fotos}
                  source = {require('./assets/jogo.jpeg')}>
                </Image>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style ={styles.maisInfos}>
        <Text style ={styles.txtMaisInfos}> Exibir mais 4 itens de formação academica</Text>
        <Ionicons name="arrow-forward" size={15} color="black" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
  faixa: {
    width: '100%',
    height: 5,
    backgroundColor:'#cfcaca',
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
  painel:{
    height: 150,
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
    height:'80%',
  },
  circulo:{
    width: 90,
    height: 90,
    zIndex: 1,
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
    marginTop: 15,
  },
  txtTrabalho:{
    fontSize: 13,
    fontWeight: '350',
  },
  txtLocal: {
    fontSize: 13,
    color: '#8f8f8f',
  },
  txtConexao: {
    fontSize: 13,
    color: '#8f8f8f',
    fontWeight: 'bold',
  },
  botoesConexao:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 50,
  },
  txtEnviar: {
    color: '#fff',
    fontWeight: '500',
    height: 'auto',
  },
  enviar:{
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0077B5',
    borderRadius: 19,
    gap: 7,
    height: '100%',
    paddingLeft: 5,
  },
  seguir:{
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 19,
    gap: 7,
    borderColor: '#0077B5',
    borderWidth: 2,
    borderStyle: 'solid',
    height: '100%',
  },
  txtSeguir: {
    color: '#0077B5',
    fontWeight: '700',
    height: 'auto',
  },
  more: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#8f8f8f',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: '50%',
    width: 30,
    height: 30,
  },
  txtMore: {
    fontWeight: '500',
    top: -5,
  },
  subtitulo:{
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descSobre:{
    fontSize: 12,
    fontFamily: 'arial',
  },
  competencias:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#8f8f8f',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
  },
  txtCompetencias:{
    width: '70%',
  },
  tituloCompetencia: {
    fontWeight: 'bold',
  },
  descCompetencia: {
    fontSize: 11,
  },
  arrow:{
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formacoes:{
    gap: 20,
  },
  uni:{
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoUniversidade:{
    width: '80%',
  },
  academias:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
  descUniversidade: {
    fontSize: 11,
  },
  maisInfos: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    gap: 5,
    paddingTop: 15,
    paddingBottom: 15,
  },
  txtMaisInfos: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  imgExperiencia: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
  },
  fotos: {
    width: 90,
    borderRadius: 10,
    height: 50,
  }
});
