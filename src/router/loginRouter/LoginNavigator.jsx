import { createStackNavigator, createAppContainer } from "@react-navigation";
import Login from "./Login";
import Detail from "./Detail";

const LoginNavigator = createStackNavigator({
    Login: {screen:Login},
    Detail: {screen:Detail}
});

export default createHomeContainer(LoginNavigator, {initialRouteName: 'Login',
});