import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    websiteList: {
        marginLeft: 20,
        marginRight: 20,
    },

    websiteListItem: {
        borderColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        padding: 5,
    },

    websiteListImage: {
        width: 350,
        height: 200,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 20,
        padding: 15
    },

    websiteListHeader: {
        marginTop: 25,
        marginBottom: 15,
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        flexDirection: 'row',
    },

    websiteListText: {
        paddingLeft: 25,
        paddingRight: 25,
        marginBottom: 20,
        color: 'white',
        flexDirection: 'row',
    },

    productText: {
        color: 'white', 
        textAlign: 'center', 
        fontSize: 20
    },
    productTextBtnPress: {
        alignItems: 'center', 
        margin: 8, 
        paddingTop: 8, 
        paddingBottom: 8,
        borderColor: '#d7deeb',
        borderRadius: 10     
    },
    appVideos: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    urlContainer: {
        alignItems: 'center',
    },
    url: {
        paddingVertical: 3,
      },
    urlText: {
        fontSize: 14,
        color: '#2e78b7',
      },
})