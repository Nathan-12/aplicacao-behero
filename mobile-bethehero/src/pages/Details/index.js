import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import LogoImg from '../../assets/logo.png'

export default function Detail(){
    return(
        <View style={styles.container}>
             <View style={styles.header}>
                <Image source={LogoImg} />
                
                <TouchableOpacity>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incidents}>
                    <Text style={styles.property}>ONG:</Text>
                    <Text style={styles.value}>MIGOPET</Text>
                    
                    <Text style={styles.property}>CASO:</Text>
                    <Text style={styles.value}>Gatinho perdido</Text>

                    <Text style={styles.property}>VALOR:</Text>
                    <Text style={styles.value}>R$ 120,00</Text>
            </View> 

            <View style={styles.box}>
                <Text style={styles.boxTextTitle}>Salve o dia !</Text>
                <Text style={styles.boxText}>Seja o herói desse caso.</Text>

                <Text style={styles.boxDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() =>{}}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={() =>{}}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
