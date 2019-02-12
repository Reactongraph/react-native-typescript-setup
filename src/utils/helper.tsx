import { NavigationActions } from 'react-navigation';

export default class Helper {
  // resetNavigation to zero index
  resetNavigation(pointer: any, navigation: any, parameter = null) {
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
  }
}
