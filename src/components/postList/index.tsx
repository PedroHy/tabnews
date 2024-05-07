import { FlatList, RefreshControl } from "react-native";
import PostCard from "../postCard";
import PageControl from "../../screens/feed/components/pageControl";
import { useState } from "react";
import { IPost } from "../../interfaces/Post";

export default function PostList({posts, navigation, load}:{posts:IPost[], navigation: any, load: any}){
    
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [page, setPage] = useState(1);

    const nextPage = ()=> setPage(page+1);
    const previousPage = ()=> setPage(page-1);

    const onRefresh = () => {
        setIsRefreshing(true);
        load(page).then(() => setIsRefreshing(false))
    };

    return(
        <FlatList
            className="h-5/6"
            data={posts}
            renderItem={({ item, index }) => <PostCard goToUserProfile={()=>navigation.navigate('User', {userId: ''})} onPress={()=>navigation.navigate('Post', {user: item.owner_username, slug: item.slug})} key={item.id} post={item} index={page==1?(index+1):(index+1)+((page-1)*30)} />}
            refreshControl={ <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} /> }
            ListFooterComponent={PageControl({page, nextPage, previousPage})}
        />
    )
}