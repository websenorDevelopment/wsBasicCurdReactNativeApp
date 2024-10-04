import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useMemo } from "react";
import type { SplashContainerProps } from "../models/NavigatorModels";

import { navigateAndSimpleReset } from "../navigators/utils";
import NetInfo, {useNetInfo} from '@react-native-community/netinfo'

export default function SplashContainer({
  navigation,
  route,
}: SplashContainerProps) {
  
  useEffect(() => {
    setTimeout(() => {
      NetInfo.fetch().then(res=>{
        if(res.isConnected){
          navigateAndSimpleReset('AuthNavigator')
        }else{
          navigateAndSimpleReset('NoInternet')
        }
      })
    }, 3000);
  }, []);

  return (
    <View style={{}}>
      <Text style={{}}>B A S E</Text>
      <Text style={{}}>P r o j e c t</Text>
    </View>
  );
}


