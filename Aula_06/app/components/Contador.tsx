import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

export default class Contador extends React.Component{
    constructor() {
        super();
        this.state = {
            contador: 0,
        };
    }
    Decrementar() {
        this.setState({
            contador: this.state.contador - 1
        });
    }
    Incrementar = () => {
        this.setState({
          contador: this.state.contador + 1,
        });
      };
    Reset = () => {
        this.setState({
           contatador: this.state.contador = 0
        });
    }
    render() {
        return (
            <View>
                <View style={styles.texto}>
                    <Text>{this.state.contador}</Text>
                </View>
                <View style={styles.botoes}>
                    <Button
                    style={styles.botao1}
                    title="Aumentar"
                    onPress={this.Incrementar.bind(this)} />

                    <Button 
                    style={styles.botao2}
                    onPress={this.Decrementar.bind(this)}
                    title="Diminui" 
                    />

                    <Button 
                    style={styles.botao3}
                    onPress={this.Reset.bind(this)}
                    title="Reseta" 
                    />
                </View>
            </View>
        );}}

const styles = StyleSheet.create({
    botoes: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        top: 220,
        height: 40,
    },
    texto: {
        alignItems: 'center',
        top: 200,
    },
});