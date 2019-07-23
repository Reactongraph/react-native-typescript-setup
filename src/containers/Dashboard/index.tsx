import * as React from 'react';
import { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from 'src/components/Header';
import styles from './styles';
import Helper from 'src/utils/helper';
import { IMAGEDATA } from 'src/utils/constants';

const helperFunctions = new Helper();

interface Props {}
interface State {
    email: String;
}
export default class Dashboard extends Component<Props, State> {
    state = {
        email: ''
    };

    async componentDidMount() {
        const storedData = await helperFunctions.getLocalData('credential');
        this.setState({ email: storedData.email });
    }

    // Logout from app
    handleLogout = () => {
        helperFunctions.storeData('isLoggedIn', '');
        helperFunctions.resetNavigation(this, 'Login', null);
    };

    showSwiper = () => {
        return (
            <Swiper showsButtons>
                {IMAGEDATA.map((image, index) => {
                    return (
                        <View key={index}>
                            <Image
                                source={{ uri: image.src.original }}
                                style={styles.imageStyle}
                            />
                        </View>
                    );
                })}
            </Swiper>
        );
    };

    render() {
        const { email } = this.state;
        return (
            <View style={styles.container}>
                <Header
                    title={`Welcome ${email}`}
                    titleTextStyle={styles.titleTextStyle}
                    wrapperStyle={styles.wrapperStyle}
                    rightText="Logout"
                    onPress={this.handleLogout}
                />
                <View style={styles.imageDataView}>{this.showSwiper()}</View>
            </View>
        );
    }
}
