import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          uri: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=11e949fc5d06576bc8b80ec192896753",
        }}
        style={styles.headerImage}
      /> */}
      {/* <Image source={require("./assets/images/Cat.webp")} style={styles.headerImage}/> */}
      {/* <View style={styles.a}>
        <Text style={styles.at}>Hello World!</Text>
      </View> */}
      <FontAwesome name="user-circle-o" size={24} color="black" />
      <Entypo name="login" size={24} color="black" />
      <FontAwesome name="users" size={24} color="black" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },

  a: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    width: 100,
    height: 100,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  at: {
    fontSize: 10,
    fontWeight: "bold",
  },

  headerImage: {
    resizeMode: "contain",
    width: 200,
    height: 100,
  },
});
