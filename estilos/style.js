import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        Image:{
            width:200,
            height:100,
            marginBottom:20
         },
        viewCentro:{
            flex:3,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: -300
        },
        container:{
            flex:1,
            backgroundColor:"black",
        },
        entradasDados:{
            width: "80%",
            height:40,
            color:"white",
            borderColor:"white",
            alignItems:"center",
            justifyContent:"center",
            borderWidth:2,
            margin:7,
            borderRadius:4,
            padding:7
        },
        botao:{
            color: 'white',
            backgroundColor:'#01819B',
            borderRadius: 8,
            width: 'fit-content',
            height: 'fit-content',
        }
    });

    export default styles;