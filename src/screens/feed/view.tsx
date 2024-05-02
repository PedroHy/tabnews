import { FlatList, RefreshControl, SafeAreaView, View } from "react-native";
import PostCard from "../../components/postCard";
import Header from "../../components/header";
import useFeedModelView from "./model.view";
import { IFeedViewModel } from "./model";
import PageControl from "./components/pageControl";
import LoadComponent from "../../components/loadComponent";
import PostList from "../../components/postList";

export default function FeedView({navigation}:{navigation:any}) {

    const { posts, loadFeed }:IFeedViewModel = useFeedModelView();

    return (
        <SafeAreaView className="bg-white relative">
            <Header />
            <View className="pt-24">
                {!posts? <LoadComponent /> : <PostList posts={posts} navigation={navigation} load={loadFeed}/>}
            </View>
        </SafeAreaView>
    )
}
