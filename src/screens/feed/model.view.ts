import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/Post";
import { Alert } from "react-native";
import api from "../../services/api";


export default function useFeedModelView(){

    const [posts, setPosts] = useState<Array<IPost>>([]);
    const [page, setPage] = useState(1);

    const loadFeed = async () => {
        try {
            let postSnapShot = await api.get(`/contents?page=${page}&per_page=30`)
            setPosts(postSnapShot.data);
        } catch (err) {
            Alert.alert('Não foi possivel carregar o Feed...' + err)
        }
    }

    useEffect(()=> { loadFeed() }, [page])

    return {
        posts,
        page,
        loadFeed
    }
}