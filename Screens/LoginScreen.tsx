import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginFormComponent from '../Components/LoginFormComponent'

const LoginScreen = () => {
  return (
    <ImageBackground source={require('../assets/pickture.jpg')} style={styles.backGround}>

        <View>
            <LoginFormComponent/>
        </View>

    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})