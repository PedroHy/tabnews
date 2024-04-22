import { createStackNavigator } from "@react-navigation/stack";
import Feed from "../screens/feed";

const Stack = createStackNavigator();


export default function Navigator (){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Feed" component={Feed} />
        </Stack.Navigator>
    )
}
