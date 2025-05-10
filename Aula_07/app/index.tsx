import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDjbbreRRTPGX_JqUDyKOFCMKpNRr_LKq4",
    authDomain: "my-first-project-7c2f8.firebaseapp.com",
    projectId: "my-first-project-7c2f8",
    storageBucket: "my-first-project-7c2f8.firebasestorage.app",
    messagingSenderId: "219638411079",
    appId: "1:219638411079:web:54ccb53af887504aaba662"
  };

firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

export default function App() {
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const nomesCollection = firebase.firestore().collection('Nomes');
            const snapshot = await nomesCollection.get();

            const data = [];
            snapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });

            setNomes(data);
        };

        fetchData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View
            style={{
                flex: 1,
                padding: 16
            }}
            >
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#A8E4A0', marginBottom: 16, fontFamily: 'sans-serif', alignContent: 'center', textAlign: 'center' }}>
                Lista de Nomes:
            </Text>
            <FlatList
                data={nomes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View
                    style={{
                    backgroundColor: '#A8E4A0', // Stardew Valley-inspired green
                    padding: 16,
                    marginBottom: 8,
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: '#6B4226', // Brown border for a rustic feel
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 2,
                    }}
                >
                    <Text style={{ fontSize: 18, color: '#6B4226', fontFamily: 'sans-serif-medium' }}>
                    {item.Nome} {item.Sobrenome}
                    </Text>
                </View>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            />
            </View>
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0, 
                    zIndex: -1,
                }}
            >
                <Image
                    source={require('../assets/images/Stardew-valley.jpg')} // Replace with your image path
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                />
            </View>
        </View>
    );
}
