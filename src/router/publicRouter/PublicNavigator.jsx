import { createStackNavigator, createAppContainer } from "@react-navigation";
import Public from "./Public";
import Detail from "./Detail";

const PublicNavigator = createStackNavigator({
    Public: {screen:Public},
    Detail: {screen:Detail}
});

export default createHomeContainer(PublicNavigator, {initialRouteName: 'Public',
});