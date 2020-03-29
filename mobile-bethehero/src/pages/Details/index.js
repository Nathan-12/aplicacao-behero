import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import LogoImg from '../../assets/logo.png'
import * as MailComposer from 'expo-mail-composer'

export default function Detail(){
    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelado" com o valor de R$ 120,00';

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha atropelada',
            recipients: ['nathanlima.b@gmail.com'],
            body: message,
        });
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=+5588998246946&text=${message}`);
    }

    return(
        <View style={styles.container}>
             <View style={styles.header}>
                <Image source={LogoImg} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incidents}>
                    <Text style={[styles.property, {marginTop: 0}]}>ONG:</Text>
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
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
