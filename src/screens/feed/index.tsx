import { Alert, View, Text, FlatList, RefreshControl } from "react-native";
import api from "../../services/api";
import { useState } from "react";
import { IPost } from "../../interfaces/Post";
import PostCard from "../../components/postCard";

export default function Feed() {

    const [posts, setPosts] = useState<Array<IPost>>([]);
    const [page, setPage] = useState(1);
    const [refreshing, setRefreshing] = useState(false);


    const loadFeed = async () => {
        try {
            let postSnapShot = await api.get(`/contents?page=${page}&per_page=30`)
            setPosts(postSnapShot.data);
        } catch (err) {
            Alert.alert('Não foi possivel carregar o Feed...' + err)
        }
    }

    const onRefresh = () => {
        setRefreshing(true);
        loadFeed().then(() => setRefreshing(false))
    };

    useState(() => {
        loadFeed()
    })

    return (
        <View className="bg-white">
            <FlatList
                data={posts}
                renderItem={({ item, index }) => <PostCard key={item.id} post={item} index={index} />}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    )
}