import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ExercicioScreen from "../pages/ExercicioScreen"

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Exercicio" component={ExercicioScreen}
                options={{
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: '#8F8E8F'
                    },
                    headerTitleStyle: {
                        color: '#000',
                        fontSize: 16,
                        fontWeight: 'bold'
                    }
                }}
            />
        </MainStack.Navigator>
    );
}