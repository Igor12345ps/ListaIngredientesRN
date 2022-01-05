import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function Adicionar(props) {

    return (
        <TouchableOpacity
            style={styles.botao}
            onPress={props.onPress}
        >
            <Text style={styles.texto}>Adicionar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao:{
        alignItems: 'center',
        padding: 10,
    },
    texto:{
        color: '#3058c7',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default Adicionar;