import { createStackNavigator, createAppContainer } from "@react-navigation";
import Home from "./Home";
import Detail from "./Detail";

const HomeNavigator = createStackNavigator({
    Home: {screen:Home},
    Detail: {screen:Detail}
});

export default createHomeContainer(HomeNavigator, {initialRouteName: 'Home',
});