import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput, FlatList, Alert } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-community/async-storage";
import Adicionar from "../components/Adicionar";
import lista from '../lista'
import ListaItem from "../components/ListaItem";

function ExercicioScreen() {

    const navigation = useNavigation();

    const [ingrediente, setIngrediente] = useState("");
    const [items, setItems] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Adicionar onPress={handleAdicionar} />
        });
    }, []);

    const handleAdicionar = () => {

        if (ingrediente.trim() != '') {
            let newItems = [...items];
            newItems.push({
                id: uuid.v4(),
                ingrediente: ingrediente
            });
            setItems(newItems);
            Alert.alert("Suceesso", "inserido: " + ingrediente);
        } else {
            Alert.alert("Aviso", "Insira um ingrediente válido!");
        }


    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Faça um Bolo</Text>

            <TextInput
                style={styles.input}
                onChangeText={(t)=>setIngrediente(t)}
                value={ingrediente}
                placeholder={'Digite um ingrediente'}
            ></TextInput>

            <FlatList
                style={styles.flatList}
                data={items}
                renderItem={({ item }) => <ListaItem data={item.ingrediente} />}
                keyExtractor={(item) => item.id}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2D2C2D'
    },
    titulo: {
        color: '#fff',
        fontSize: 25,
        paddingTop: 20,
        fontWeight: "bold"
    },
    input: {
        backgroundColor: '#fff',
        color: '#000',
        marginTop: 20,
        width: '90%',
        padding: 10
    },
    flatList: {
        marginTop: 10,
        width: '90%'
    }
});

export default ExercicioScreen;