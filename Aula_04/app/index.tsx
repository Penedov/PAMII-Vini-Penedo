import { async } from '@firebase/util';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9kdFYQEnBherfy4YIg37OKXcEO7dFQ4s",
  authDomain: "meu-primeiro-firebase-c8e45.firebaseapp.com",
  projectId: "meu-primeiro-firebase-c8e45",
  storageBucket: "meu-primeiro-firebase-c8e45.firebasestorage.app",
  messagingSenderId: "381636714535",
  appId: "1:381636714535:web:99b735d312f25e674a2e02"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const nomesCollection = firebase.firestore().collection('Nomes');
        const snapshot = await nomesCollection.get();

        const data = [];
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data()});
        });

        setNomes(data);
      };

      fetchData();

    },[]);

    return {
      <View style={{ flex: 1, 
          justifyContent: 'center',
          alignItems: 'center'}}>
      <Text> Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item })} => (
          <View>
            <Text>{item.Nome} {ClipboardItem.Sobrenome}</Text>
          </View>
        )

    }

}