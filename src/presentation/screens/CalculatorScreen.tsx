import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, styleGlobal } from '../../config/theme/app-theme'
import { CalculatorButton } from '../components/CalculatorButton'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = () => {

    const {number,prevNumber, buildNumber, clear,deleteOperation, toggleSign, addOperation ,divideOperation, multipliOperation,substractdeOperation,calculateResult} = useCalculator()
    return (
        <View style={styleGlobal.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
                <Text 
                adjustsFontSizeToFit // ajustar a en la misma linea
                numberOfLines={1}//solo una linea
                style={styleGlobal.mainResult} >{number}</Text>
                <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={styleGlobal.secundaryResult}>
                    {(prevNumber === '0') ? ' ': prevNumber}
                </Text>

            </View>

            <View style={styleGlobal.row}>
                <CalculatorButton onPress={clear} text='c' buttonColor={colors.lightGray} textString/>
                <CalculatorButton onPress={toggleSign} text='+/-' buttonColor={colors.lightGray} textString/>
                <CalculatorButton onPress={ deleteOperation} text='del'  buttonColor={colors.lightGray} textString/>
                <CalculatorButton onPress={divideOperation} text='/' buttonColor={colors.orange} />
                
            </View>

            <View style={styleGlobal.row}>
                <CalculatorButton onPress={()=> {buildNumber('7')}} text='7'buttonColor={colors.darkGray}/>
                <CalculatorButton onPress={()=> {buildNumber('8')}} text='8' buttonColor={colors.darkGray} />
                <CalculatorButton onPress={()=> {buildNumber('9')}} text='9'  buttonColor={colors.darkGray}/>
                <CalculatorButton onPress={multipliOperation} text='x' buttonColor={colors.orange}/>
                
            </View>

            <View style={styleGlobal.row}>
                <CalculatorButton onPress={()=> {buildNumber('4')}} text='4'buttonColor={colors.darkGray}/>
                <CalculatorButton onPress={()=> {buildNumber('5')}} text='5' buttonColor={colors.darkGray} />
                <CalculatorButton onPress={()=> {buildNumber('6')}} text='6'  buttonColor={colors.darkGray}/>
                <CalculatorButton onPress={substractdeOperation} text='-' buttonColor={colors.orange}/>
                
            </View>

            <View style={styleGlobal.row}>
                <CalculatorButton onPress={()=> {buildNumber('1')}} text='1'buttonColor={colors.darkGray}/>
                <CalculatorButton onPress={()=> {buildNumber('2')}} text='2' buttonColor={colors.darkGray} />
                <CalculatorButton onPress={()=> {buildNumber('3')}} text='3'  buttonColor={colors.darkGray}/>
                <CalculatorButton onPress={addOperation} text='+' buttonColor={colors.orange}/>
                
            </View>

            <View style={styleGlobal.row}>
                <CalculatorButton onPress={()=> {buildNumber('0')}} text='0' buttonColor={colors.darkGray}  doubleSize={true}/>
                <CalculatorButton onPress={()=> {buildNumber('.')}} text='.' buttonColor={colors.darkGray} />
                <CalculatorButton onPress={calculateResult} text='='  buttonColor={colors.orange}/>
                
            </View>
        </View>
    )
}
