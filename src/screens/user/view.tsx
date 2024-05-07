import { SafeAreaView, Text, View } from "react-native";
import Header from "../../components/header";
import Tab from "../../components/tab";
import UserProfile from "./components/userProfile";
import UserPosts from "./components/userPosts";
import UserComments from "./components/userComments";
import useUserModelView from "./model.view";
import LoadComponent from "../../components/loadComponent";

export default function UserView({navigation, route}:{navigation:any, route:any}){

    const { user, comments, posts } = useUserModelView({route});

    return ( 
        <SafeAreaView>
            <View> 
                <Header />
                {!user?<LoadComponent />:
                <View className="pt-24 px-4">
                    <Text className="text-3xl font-semibold py-6">{user.username}</Text>
                    <Tab.Root>
                        <Tab.View title='Perfil' component={<UserProfile user={user} />}/>
                        {posts?<Tab.View title='Posts' component={<UserPosts posts={posts} navigation={navigation} />}/>: null}
                        {comments?<Tab.View title='Comentários' component={<UserComments comments={comments}/>}/>:null}
                    </Tab.Root>
                </View>
                }
            </View>
        </SafeAreaView>
    )

}