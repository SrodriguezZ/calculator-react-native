import React, { useRef, useState } from 'react'
enum Operators {
    add,
    subtract,
    multiply,
    divide,
}
export const useCalculator = () => {

  
    const [number, setNumber] = useState<string>('0')
    const [prevNumber, setPrevNumber] = useState('0')
    const lastOperation = useRef<Operators>();
    const clear = () => { 
        setNumber('0')
        setPrevNumber('0')
     }

     const deleteOperation = () => { 
let currentSign = '';
let TemporalNumber = number;
        if(number.includes('-')){
            currentSign = '-';
            TemporalNumber = number.substring(1);
        }

        if(TemporalNumber.length >1 ){
            return setNumber(currentSign + TemporalNumber.slice(0,-1))
        }
//        const value = number.charAt(number.length -1 );//para quitar el ultimo caracter
     //   const value = number.slice(0,-1) //slice quita el ultimo numero 
        setNumber('0')
      }

      const toggleSign = () => { 
        if(number.includes('-')){
            return setNumber(number.replace('-',''))
        }
       }

    const buildNumber = (numberString:string) => { 
        if(number.includes('.') && numberString === '.') {return} ;

        if(number.startsWith('0') || number.startsWith('-0')){

            //Poner el punto decimal
            if(numberString==='.'){
                return setNumber(number + numberString)
            }

            //evaluar si es otro cero y no hay punto
            if(numberString=== '0' && number.includes('.')){
                return setNumber(number + numberString)
            }

            //evaluar si es diferente a cero, no hay punto y es el primero numero
            if(numberString !== '0' && !number.includes('.')){
                return setNumber(numberString)//numero solo
            }

            //evitar 0000
            if(numberString === '0' && !number.includes('.')) {return};
            return setNumber(number + numberString)
        }

        setNumber(number + numberString)

    }

    const setLastNumber = () => { 
        if(number.endsWith('.')){
            setPrevNumber( number.slice(0,-1))
        }else{
            setPrevNumber(number)
        }
        setNumber('0')
     }
     const divideOperation = () => {
        setLastNumber()
        lastOperation.current = Operators.divide
     }

     const multipliOperation = () => {
        setLastNumber()
        lastOperation.current = Operators.multiply
     }

     const substractdeOperation = () => {
        setLastNumber()
        lastOperation.current = Operators.subtract
     }

     const addOperation = () => {
        setLastNumber()
        lastOperation.current = Operators.add
     }

     const calculateResult = () => { 
        const num1 = Number(number);
        const num2 = Number(prevNumber);
        switch(lastOperation.current){
            case Operators.add:
                setNumber(`${num1 + num2}`)
                break;
            case Operators.divide:
                setNumber(`${num2 / num1}`)
                break;
                case Operators.subtract:
                setNumber(`${num2 - num1}`)
                break;
                case Operators.multiply:
                setNumber(`${num2 * num1}`)
                break;
                
            default:
                throw new Error('Operation not implemented')
        }
        setPrevNumber('0')
      }

  return {
    //props
    number,
    prevNumber,
    //method
    buildNumber,
    clear,
    deleteOperation,
    toggleSign,
    divideOperation,
    multipliOperation,
    substractdeOperation,
    addOperation,
    calculateResult
  }
}
