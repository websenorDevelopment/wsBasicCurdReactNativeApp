import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { NoInternetContainerProps } from '../models/NavigatorModels/RootStackProps'

import netInfo, { useNetInfo } from '@react-native-community/netinfo';
import { navigateAndSimpleReset } from '../navigators/utils';

export default function NoInternetContainer({
    navigation,
    route
}:NoInternetContainerProps) {

    

    useEffect(()=>{
        let unsubscribe = netInfo.addEventListener((state)=>{
            if(state.isConnected){
                navigateAndSimpleReset('Splash')
            }
        })
        return ()=>{
            unsubscribe()
        }
    },[])

  return (
    <View style={{}}>
        
      <Text style={{}}>No Internet</Text>
      <Text style={{}}>Pls check your internet connection</Text>
    </View>
  )
}

