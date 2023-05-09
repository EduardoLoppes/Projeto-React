import React, { useState, useEffect, useRef } from 'react';

import {

    View, Text, StyleSheet,

    TouchableOpacity, Keyboard, FlatList, ActivityIndicator

} from 'react-native';

import { TextInput } from 'react-native-paper';
export default function GerenciarProdutos() {
    const [name, setName] = useState('');

    const [brand, setBrand] = useState('');

    const [price, setPrice] = useState('');

    const [color, setColor] = useState('');

    const [type, setType] = useState('');

    const [key, setKey] = useState('');
}
return (

    <View style={styles.container}>

        <TextInput

            placeholder='Name'

            left={<TextInput.Icon icon="person" />}

            maxLength={40}

            style={styles.input}

            onChangeText={(texto) => setName(texto)}

            value={name}

        />

        <TextInput

            placeholder='Brand'

            left={<TextInput.Icon icon="sale" />}

            style={styles.input}

            onChangeText={(texto) => setBrand(texto)}

            value={brand}

        />

        <TextInput

            placeholder='Price'

            left={<TextInput.Icon icon="sack" />}

            style={styles.input}

            onChangeText={(texto) => setPrice(texto)}

            value={price}

        />

        <TextInput

            placeholder='Color'

            left={<TextInput.Icon icon="color" />}

            style={styles.input}

            onChangeText={(texto) => setColor(texto)}

            value={color}

        />
        <TextInput

            placeholder='Type'

            left={<TextInput.Icon icon="type" />}

            style={styles.input}

            onChangeText={(texto) => setColor(texto)}

            value={color}

        />

    </View>

);

