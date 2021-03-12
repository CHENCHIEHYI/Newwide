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
} from "react-native";
// import {helloWorld, msg} from "./hello.js";
// import {helloWorld as myFun , msg as myMsg} from "./hello.js";


const APParr=[ "ReadAPI" , "App" ];
const [ aa , bb ] = APParr;

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}


const ReadAPI = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isHungry, setIsHungry] = useState(true);
  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    
    <View style={{ flex: 1, padding: 24 }}>

      <Text>
        APP測試開發_ReadAPI
      </Text>
            
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        
        <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue={getFullName("CHEN", "CHIEH", "YI")}
        style={{ width: 200, height: 40 ,borderBottomWidth:2 }}
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
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
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





export default ReadAPI;