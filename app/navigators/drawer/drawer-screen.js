
import React from 'react';
import { Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './drawer-content';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Categories')}
                title="Create categories"
            />
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();
const DrawerScreen = ({ }) => {
    return (
        <Drawer.Navigator headerMode="none" initialRouteName={"Dashboard"} drawerPosition="left" drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen
                name="Dashboard"
                component={HomeScreen}
                options={{
                    headerShown: false, hidden: true, unmountOnBlur: true
                }} />
            <Drawer.Screen
                name="Categories"
                component={NotificationsScreen}
                options={{ headerShown: false, hidden: true, unmountOnBlur: true }}
            />
            <Drawer.Screen
                name="Expenses"
                component={NotificationsScreen}
                options={{ headerShown: false, hidden: true, unmountOnBlur: true }}
            />
        </Drawer.Navigator>
    )
};

export default DrawerScreen;
