import { useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import PageControl from "../../screens/feed/components/pageControl";
import CommentItem from "./components/commentItem";

export default function CommentList(){

    const [isRefreshing, setIsRefreshing] = useState(false);
    const [page, setPage] = useState(1);

    const nextPage = ()=> setPage(page+1);
    const previousPage = ()=> setPage(page-1);

    const onRefresh = () => {
        setIsRefreshing(true);
    };

    return <FlatList 
            data={[0, 1, 2]} 
            renderItem={({index})=><CommentItem index={index+1} />}
            refreshControl={ <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} /> }
            ListFooterComponent={PageControl({page, nextPage, previousPage})}/>
}