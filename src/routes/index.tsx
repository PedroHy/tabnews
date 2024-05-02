import { createStackNavigator } from "@react-navigation/stack";
import FeedView from "../screens/feed/view";
import PostView from "../screens/post/view";
import UserView from "../screens/user/view";

const Stack = createStackNavigator();

export default function Navigator (){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Feed" component={FeedView} />
            <Stack.Screen name="Post" component={PostView} />
            <Stack.Screen name="User" component={UserView} />
        </Stack.Navigator>
    )
}
