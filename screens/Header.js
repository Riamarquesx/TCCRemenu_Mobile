import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 

// Caminho da pasta que você falou: ../assets/Header
const logoRemenu = require('../assets/Header/remenu_logo.png');

export default function Header() {
    return (
        <View style={styles.headerContainer}>

            {/* Logo Remenu */}
            <TouchableOpacity style={styles.logoArea}>
                <Image source={logoRemenu} style={styles.logoImage} />
                <Text style={styles.logoText}>Remenu</Text>
            </TouchableOpacity>

            {/* Ícone de Perfil */}
            <TouchableOpacity style={styles.profileIconArea}>
                <Icon name="user" size={26} color="#44a67f" /> 
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
    },
    logoArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginRight: 8,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#44a67f',
    },
    profileIconArea: {
        padding: 6,
    }
});
