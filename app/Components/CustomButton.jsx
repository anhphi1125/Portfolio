import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
    const {
        label,
        bg,
        borderColor,
        borderW,
        radius,
        padH,
        padV,
        fontSize,
        labelColor,
        onPress,
    } = props;
  return (
    <TouchableOpacity
        style={{
            paddingHorizontal: padH ? padH : 24,
            backgroundColor: bg ? bg : '#FFFFFF',
            paddingVertical: padV ? padV : 8,
            borderColor: borderColor ? borderColor : "#FFFFFF",
            borderWidth: borderW ? borderW : 0,
            borderRadius: radius ? radius : 0,
            alignSelf: 'flex-start'
        }}
        onPress={onPress}
    >
        <Text style={{
            fontSize: fontSize ? fontSize : 18,
            color: labelColor ? labelColor : '#25282B',
            textAlign: 'center',
        }}>{label}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})