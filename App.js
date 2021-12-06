import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'

const App = () => {
   const [email, setEmail] = useState("")
   const [passWord, setPassWord] = useState("")

   return (
      <SafeAreaView style={styles.background}>
         <Text style={styles.title}>
            Log In   
         </Text>
         <View style={styles.containerInput}>
            <View style={styles.viewInput}>
               <Text style={styles.label}>
                  EMAIL OR USERNAME
               </Text>
               <TextInput
                  style={styles.input}
                  onChangeText={value => setEmail(value)}
                  value={email}
                  placeholder="Email or Username"
                  placeholderTextColor="#383838"
               />
            </View>
            <View style={styles.viewInput}>
               <Text style={styles.label}>
                  PASSWORD
               </Text>
               <TextInput
                  style={styles.input}
                  onChangeText={value => setPassWord(value)}
                  value={passWord}
                  placeholder="Password"
                  placeholderTextColor="#383838"
               />
            </View>
         </View>
         <Text style={styles.forgot}>
           Forgot Password?
         </Text>
         <TouchableOpacity style={styles.button}>
            <Text style={styles.txtLogin}>
               Log In
            </Text>
         </TouchableOpacity>
         <View style={styles.account}>
            <Text style={styles.txtAccount}>
               Don't have an account?
            </Text>
            <Text style={styles.txtAccountUndeline}>
               Create Account
            </Text>
         </View>
         
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   background: {
      flex: 1,
      backgroundColor: "black"
   },
   title: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 35,
      paddingTop: 35,
      paddingLeft: 20
   },
   containerInput: {
      paddingHorizontal: 20,
      paddingTop: 25
   },
   viewInput: {
      height:100,
      justifyContent: "space-evenly"
   },
   label: {
      fontSize: 12,
      color: '#6b6b6b',
      paddingLeft: 15,
      fontWeight: '700'
   },
   input: {
      backgroundColor: "#121212",
      height: 50,
      borderRadius: 10,
      paddingHorizontal: 15,
      color: "#383838",
      fontSize: 16,
      fontWeight: "500"
   },
   forgot: {
      color: '#6b6b6b',
      paddingLeft: 35,
      textDecorationLine: 'underline',
      fontSize: 13,
      fontWeight: "500"
   },
   button: {
      backgroundColor: '#1c1c1c',
      height: 55,
      marginHorizontal: 20,
      marginTop: 20, 
      borderRadius:10,
      justifyContent: "center",
      alignItems: "center"
   },
   txtLogin: {
      fontSize: 16,
      color: "#707070",
      fontWeight: 'bold'
   },
   account: {
      flexDirection: 'row',
      paddingTop: 20
   },
   txtAccount: {
      color: '#6b6b6b',
      paddingLeft: 35,
      fontSize: 13,
      fontWeight: "500"
   },
   txtAccountUndeline: {
      color: '#6b6b6b',
      paddingLeft: 5,
      textDecorationLine: 'underline',
      fontSize: 13,
      fontWeight: "500"
   }
})

export default App