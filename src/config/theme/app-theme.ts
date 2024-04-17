import { Button, StyleSheet } from "react-native"



export const colors= {
    darkGray:'#2D2D2D',
    lightGray:'#9B9B9B',
    orange:'#FF9427',

    textPrimary: 'white',
    textSecondary:'#666666',
    background:'#000000'
}

export const styleGlobal = StyleSheet.create({
    backGround : {
        flex:1,
        backgroundColor: colors.background
    },
    calculatorContainer:{
        flex:1,
        justifyContent:'flex-end',
        padding:20
    },
    mainResult:{
        fontSize:70,
        textAlign:'right',
        color:colors.textPrimary,
        marginBottom:10,
        fontWeight:'400'
    },
    secundaryResult:{
        color:colors.textSecondary,
        fontSize:40,
        textAlign:'right',
        fontWeight:'300'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        paddingHorizontal:10,
        paddingVertical:5
    },
    button:{
        backgroundColor:colors.darkGray,
        height:70,
        width:60,
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10
    },
    buttonText:{
        textAlign:'center',
        padding:10,
        fontWeight:'300',
        color:'white',
        fontSize:30
    }
})