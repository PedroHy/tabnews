import { SafeAreaView, Text, View } from "react-native";
import Header from "../../components/header";
import Tab from "../../components/tab";
import UserProfile from "./components/userProfile";
import UserPosts from "./components/userPosts";
import UserComments from "./components/userComments";

export default function UserView({navigation}:{navigation:any}){

    return ( 
        <SafeAreaView>
            <Header />
            <View className="pt-24 px-4">
                <Text className="text-3xl font-semibold py-6">Nome do usuário</Text>
                <Tab.Root>
                    <Tab.View title='Perfil' component={<UserProfile />}/>
                    <Tab.View title='Posts' component={<UserPosts navigation={navigation} />}/>
                    <Tab.View title='Comentários' component={<UserComments />}/>
                </Tab.Root>
            </View>
        </SafeAreaView>
    )

}