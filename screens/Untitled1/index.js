import { api_v1_signup_create } from "../../store/testingappAPI/signups.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(api_v1_signup_create());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  }
});
export default Untitled1;