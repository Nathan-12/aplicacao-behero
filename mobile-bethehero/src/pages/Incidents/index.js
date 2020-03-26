import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import LogoImg from '../../assets/logo.png'

export default function Incidents(){

    const navigation = useNavigation();

    function navigationToDetail(){
        navigation.navigate('Details');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={LogoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>
                <Text style={styles.title}>Bem-vindo(a)!</Text>
                <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
            
            <FlatList
                style={styles.listIncidents} 
                data={[1, 2, 3, 4, 5]}
                showsVerticalScrollIndicator={false}
                keyExtractor={incident => String(incident)}
                renderItem={() => (
                    <View style={styles.incidents}>
                    <Text style={styles.property}>ONG:</Text>
                    <Text style={styles.value}>MIGOPET</Text>
                    
                    <Text style={styles.property}>CASO:</Text>
                    <Text style={styles.value}>Gatinho perdido</Text>

                    <Text style={styles.property}>VALOR:</Text>
                    <Text style={styles.value}>R$ 120,00</Text>

                    <TouchableOpacity 
                        style={styles.detailButton} 
                        onPress={navigationToDetail}
                    >
                        <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>      
                )}
            />

        

        </View>
    );
}