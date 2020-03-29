import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },

    incidents: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 48
    },

    property: {
        fontSize: 16,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
        
    }, 

    value: {
        marginTop: 6,
        fontSize: 15,
        color: '#737380'
    },

    box: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    boxTextTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    boxText: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#E02041'
    },

    boxDescription: {
        marginTop: 25,
        fontSize: 16,
        color: '#737380'
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: 'white',
        fontSize: 16, 
        fontWeight: 'bold'
    }
});
