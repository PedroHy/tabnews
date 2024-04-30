import { FlatList, RefreshControl, SafeAreaView, View } from "react-native";
import PostCard from "../../components/postCard";
import Header from "../../components/header";
import useFeedModelView from "./model.view";
import { IFeedViewModel } from "./model";
import PageControl from "./components/pageControl";
import LoadComponent from "../../components/loadComponent";

export default function FeedView({navigation}:{navigation:any}) {

    const { posts, page, isRefreshing, onRefresh, previousPage, nextPage }:IFeedViewModel = useFeedModelView();

    return (
        <SafeAreaView className="bg-white relative">
            <Header />
            <View className="pt-24">
                {!posts? <LoadComponent /> : 
                    <FlatList
                    data={posts}
                    renderItem={({ item, index }) => <PostCard onPress={()=>navigation.navigate('Post', {user: item.owner_username, slug: item.slug})} key={item.id} post={item} index={page==1?(index+1):(index+1)+((page-1)*30)} />}
                    refreshControl={ <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} /> }
                    ListFooterComponent={PageControl({page, nextPage, previousPage})}
                    />
                }
            </View>
        </SafeAreaView>
    )
}
