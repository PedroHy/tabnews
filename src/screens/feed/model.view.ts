import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/Post";
import { Alert } from "react-native";
import api from "../../services/api";


export default function useFeedModelView(){

    const [posts, setPosts] = useState<Array<IPost>>([]);
    const [page, setPage] = useState(1);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const loadFeed = async () => {
        try {
            let postSnapShot = await api.get(`/contents?page=${page}&per_page=30`)
            setPosts(postSnapShot.data);
        } catch (err) {
            Alert.alert('Não foi possivel carregar o Feed...' + err)
        }
    }

    const onRefresh = () => {
        setIsRefreshing(true);
        loadFeed().then(() => setIsRefreshing(false))
    };

    const nextPage = ()=> setPage(page+1);
    const previousPage = ()=> setPage(page-1);

    useEffect(() => {loadFeed()}, [page])

    return {
        posts,
        page,
        isRefreshing,
        nextPage,
        previousPage,
        onRefresh
    }
}