import React from "react";
import { StyleSheet, Text } from "react-native";

function ListaItem(props) {

    return (
        <Text style={styles.texto}>{props.data}</Text>
    );
}

const styles = StyleSheet.create({
    texto:{
        color: '#fff',
        fontSize: 18,
        padding: 4
    }
});

export default ListaItem;