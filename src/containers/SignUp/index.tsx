import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'src/components/Button';
import Form from 'src/components/Form';
import Helper from 'src/utils/helper';
import styles from 'src/containers/Login/styles';

const helperFunctions = new Helper();

interface Props {}
interface State {
    email: String;
    password: String;
}

export default class Login extends Component<Props, State> {
    state = {
        email: '',
        password: ''
    };

    handleSubmitForm = () => {
        const { email, password } = this.state;
        if (helperFunctions.validateData(email, password)) {
            const signUpData = {
                email,
                password
            };
            helperFunctions.storeData('credential', JSON.stringify(signUpData));
            helperFunctions.resetNavigation(this, 'Dashboard', null);
        }
    };
    handleLogin = () => {
        helperFunctions.resetNavigation(this, 'Login', null);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.screenTitle}>SignUp with App</Text>
                <Form
                    onEmailChangeText={email => this.setState({ email })}
                    email={this.state.email}
                    onPasswordChangeText={password =>
                        this.setState({ password })
                    }
                    onSubmit={this.handleSubmitForm}
                    password={this.state.password}
                    buttonText="SignUp"
                />
                <Button
                    onPress={this.handleLogin}
                    style={styles.buttonContainer}
                    text="Already have Account"
                    buttonTextStyle={styles.buttonText}
                />
            </View>
        );
    }
}
