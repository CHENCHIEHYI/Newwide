import React, { useEffect,useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Button,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  View,
  ActivityIndicator,
  FlatList,
  ImageBackground
} from "react-native";
// import {helloWorld, msg} from "./hello.js";
// import {helloWorld as myFun , msg as myMsg} from "./hello.js";


const APParr=[ "ReadAPI" , "App" ];
const [ aa , bb ] = APParr;

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}
const imageB = { uri: "https://reactjs.org/logo-og.png" };







const ReadAPI = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isHungry, setIsHungry] = useState(true);
  useEffect(() => { //https://reactnative.dev/movies.json
    fetch('https://eipcz.newwide.com/api/GetMAT_T_ZA_json.aspx?PNO=CCGAZ05100700203&FNO=CZ&UID=001&EMAIL=chiehyih.chen@newwide.com')//https://eipcz.newwide.com/api/GetMAT_T_ZA_json.aspx?PNO=CCGAZ05100700203&FNO=CZ&UID=001&EMAIL=chiehyih.chen@newwide.com
      .then((response) => response.json())
      .then((json) => setData(json.PPdata))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    
    <View style={{ flex: 1, padding: 24 }}>
      <ImageBackground source={imageB} style={styles2.image}>
        <Text style={styles2.text}>
          APP測試開發_ReadAPI
        </Text>
         <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}
          style={{ width: 150, height: 50 ,resizeMode:'center'}}
        />
        
        <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          color:'white'
        }}
        defaultValue={getFullName("CHEN", "CHIEH", "YI")}
        style={{ width: 200, height: 40 ,borderBottomWidth:2,color:'white' }}
        />

         <Button
            style={{ width: 10, height: 10 }}
            onPress={() => {   
              Alert.alert('button pressed')       
            }}
            disabled={!isHungry}
            title={isHungry ? "Search" : "Searched!"}
        />  

        

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles2.textsm}>{item.title}, {item.PPitem}</Text>
          )}
        />
      )}    
      
      </ImageBackground>
            

    </View>
  );
};


// const CatP = (props) => {
//   const [isHungry, setIsHungry] = useState(true);
//   return (
//       <View>
//         <Text>
//           I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
        
//         </Text>
//         <Button
//         onPress={() => {
//           setIsHungry(false);
//         }}
//         disabled={!isHungry}
//         title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
//       />        
//       </View>
//   );
// }


const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Text style={styles}>NEWWIDE_APP測試開發</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
			  
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>


      
    </View>

  );
};




console.log("Running : "+aa); 


// const obj={ fruitOne: "apple", fruitTwo: "banana" };
// const { fruitOne: a , fruitTwo: b  } = obj;
// console.log("a is "+a); // a is apple
// console.log("b is "+b); // b is banana

// helloWorld();
// console.log(myMsg);

// console.log(msg);





const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  textsm: {
    color: "white",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});



export default ReadAPI;