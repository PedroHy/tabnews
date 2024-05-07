import { useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import PageControl from "../../screens/feed/components/pageControl";
import CommentItem from "./components/commentItem";
import IComment from "../../interfaces/Comment";

export default function CommentList({comments}:{comments: IComment[]}){

    const [isRefreshing, setIsRefreshing] = useState(false);
    const [page, setPage] = useState(1);

    const nextPage = ()=> setPage(page+1);
    const previousPage = ()=> setPage(page-1);

    const onRefresh = () => {
        setIsRefreshing(true);
    };

    return <FlatList 
            className="h-5/6"
            data={comments} 
            renderItem={({index, item})=><CommentItem comment={item} index={index+1} />}
            refreshControl={ <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} /> }
            ListFooterComponent={PageControl({page, nextPage, previousPage})}/>
}