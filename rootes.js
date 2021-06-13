import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/loginScreen';
import DescritpioScreen from './screens/descritpioScreen';
import SecondDescrtionscreen from './screens/secondDescrtionscreen';


const BeforLogin = createStackNavigator(
    {
        Login: {
        screen: LoginScreen

               }

    },
    {
        headerMode: 'none',
        initialRouteName:"Login"
    }

)
const AfterLogin = createStackNavigator(
    {
        Description: {
        screen: DescritpioScreen

               }

    },
    {
        headerMode: 'none',
        initialRouteName:"Description"
    }

)
const AppNavigator = createStackNavigator(
    {
        Auth:BeforLogin,
        App: AfterLogin,
        AuthLoadingScreen: SecondDescrtionscreen
    },
    {
        headerMode: 'none',
        initialRouteName:"Auth"
    }
)
export default createAppContainer(AppNavigator);