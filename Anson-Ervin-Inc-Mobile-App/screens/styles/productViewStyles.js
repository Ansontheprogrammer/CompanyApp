import { StyleSheet } from 'react-native';

const landingPageTextColor = 'white';

export default StyleSheet.create({
    contentContainer: {
        paddingTop: 125,
    },
    getStartedText: {
        fontSize: 17,
        color: landingPageTextColor,
        lineHeight: 24,
        textAlign: 'center',
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
    }
})