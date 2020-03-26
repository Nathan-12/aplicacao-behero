import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        display: 'flex',
        paddingHorizontal: 24,
        paddingTop : Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
       fontSize: 15,
       color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        fontWeight: 'bold'
    },

    description: {
       fontSize: 16,
       lineHeight: 24,
       color: '#737380' 
    },

    listIncidents: {
        marginTop: 30,
    },

    incidents: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    property: {
        fontSize: 16,
        color: '#41414d',
        fontWeight: 'bold'
    }, 

    value: {
        marginTop: 6,
        marginBottom:15,
        fontSize: 15,
        color: '#737380'
    },

    detailButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
});