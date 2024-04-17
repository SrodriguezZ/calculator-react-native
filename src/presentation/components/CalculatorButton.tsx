import React from 'react'
import { Pressable, Text } from 'react-native'
import { colors, styleGlobal } from '../../config/theme/app-theme'
interface Props {
    text:string;
    buttonColor?:string;
    doubleSize?:boolean;
    textString?: boolean;
    onPress: ()=> void;
}
export const CalculatorButton = ({text,onPress, buttonColor = colors.darkGray , doubleSize=false , textString = false}:Props) => {
    return (
        <Pressable
        onPress={()=> onPress()}
        style={({pressed})=> ({
            ...styleGlobal.button,
            
            width:(doubleSize) ? 180 : 80,
            opacity:(pressed) ? 0.8 : 1,
            backgroundColor: buttonColor
        })}>
            <Text style={{
                ...styleGlobal.buttonText,
                color: (textString) ? 'black' : 'white '
            }}>{text}</Text>
        </Pressable>
    )
}

