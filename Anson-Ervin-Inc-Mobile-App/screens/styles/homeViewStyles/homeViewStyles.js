import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    websiteList: {
        backgroundColor: 'black',
        marginLeft: 40,
        marginRight: 40,
    },

    websiteListImage: {
        width: 350,
        height: 200,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 20,
        padding: 25
    },

    websiteListText: {
        marginTop: 25,
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