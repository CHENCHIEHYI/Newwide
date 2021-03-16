import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {Camera} from 'expo-camera';
import * as Permissions from 'expo-permissions';


import {ScollView,StyleSheet,FlatList,Text,View,Button,Linking} from 'react-native';



export default class QRScannerScreen extends Component{
  state={
    hasCameraPermission:null,
    scanned:false,
  }

  async componentDidMount(){
    this.getPermissionAsync();
  }

  getPermissionAsync=async()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission:status==='granted'});
  }

  handleBarCodeScanned=({type,data})=>{
    this.setState({scanned:true});
    alert(data+ '已被掃描');
    // this.props.navigation.navigate('QRContentDetail', {
    //   id: data,
    // });
  }

  render(){
    const {hasCameraPermission,scanned}=this.state;
    if(hasCameraPermission===null){
      return <Text>請求攝影機權限中</Text>;
    }
    if(hasCameraPermission===false){
      return <Text>不允許存取攝影機</Text>;
    }
    return(
      <View
        style={{
          flex:1,
          flexDirection:'column',
          justifyContent:'flex-end',
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned?undefined:this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned&&(
          <Button title={'再次掃描'} onPress={()=>this.setState({scanned:false})}/>
        )}
      </View>
    )
  }
}


