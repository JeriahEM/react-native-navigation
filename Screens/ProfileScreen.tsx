import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { narutoFetch } from '../DataServices/Dataservices';
import { Props } from '../type';
import { useFocusEffect } from '@react-navigation/native';

const ProfileScreen = ({ navigation }: Props) => {

  const [ characterName, setCharacterName] = useState<string>('');
  const [ characterImg, setCharacterImg] = useState<string>('');

    const getData = async () => {
      const data = await narutoFetch();
      setCharacterName(data.name)
      setCharacterImg(data.images[0])
    }
    



  return (

    <View>
      <Text style={{textAlign: 'center', }}>Your Naruto Character is...</Text>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 35}}>{characterName}</Text>
      <Image src={characterImg} style={{width: '100%', height: 500}}></Image>
      <Button title="test" onPress={getData}/>
      <Button title='Next Page' onPress={() => navigation.navigate("DataScreen", {
        name: characterName,
        img: characterImg
        })}/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})