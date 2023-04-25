import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { api_v1_signup_create } from "../../store/testingappAPI/signups.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(api_v1_signup_create());
  }, []);
  return <SafeAreaView style={styles.safeArea} onPress={() => {
    navigation.navigate("Articles");
  }}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.xxNjYjMP} defaultValue="get started" selectTextOnFocus={true}></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  xxNjYjMP: {
    backgroundColor: "#060505",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    left: 103,
    top: 271,
    color: "#efe0e0"
  }
});
export default Untitled1;