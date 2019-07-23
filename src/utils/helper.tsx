import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Helper {
    // resetNavigation to zero index
    resetNavigation = (pointer: any, navigation: any, parameter = null) => {
        const _this = pointer;
        _this.props.navigation.dispatch(
            NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({
                        routeName: navigation,
                        params: parameter
                    })
                ]
            })
        );
    };

    // Store value in local storage
    storeData = async (key: string, data: string) => {
        try {
            await AsyncStorage.setItem(key, data);
        } catch (error) {
            console.warn(error);
        }
    };

    // get value from local storage
    getLocalData = async (key: string) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value) {
                return JSON.parse(value);
            }
        } catch (error) {
            console.warn(error);
        }
    };

    // email validation
    validateData = (email: string, password: string) => {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email) === true && password.length > 5) {
            return true;
        }
        alert('Invalid email or password length is greater than 5');
        return false;
    };
}
