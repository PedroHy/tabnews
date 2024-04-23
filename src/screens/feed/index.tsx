import { Alert, View, Text, FlatList, RefreshControl, Button, TouchableOpacity, ActivityIndicator } from "react-native";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/Post";
import PostCard from "../../components/postCard";
import Header from "../../components/header";

export default function Feed({navigation}:{navigation:any}) {

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

    useEffect(() => {
        loadFeed()
    }, [page])

    if(!posts) {
        return (
            <View className="items-center justify-center flex-1">
                <ActivityIndicator size="large" color="#000000" />
            </View>
        )
    }

    return (
        <View className="bg-white">
                <FlatList
                    data={posts}
                    renderItem={({ item, index }) => <PostCard onPress={()=>navigation.navigate('Post', {user: item.owner_username, slug: item.slug})} key={item.id} post={item} index={page==1?(index+1):(index+1)+((page-1)*30)} />}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    ListHeaderComponent={Header}
                    ListFooterComponent={()=>{
                        return(
                            <View className="h-32 flex-row justify-center gap-4 pt-6">
                                <TouchableOpacity disabled={page==1?true:false} onPress={()=>setPage(page-1)}>
                                    <Text className={page!=1?"text-lg text-blue-500":"text-zinc-500 text-lg"}>&lt; Anterior</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>setPage(page+1)}>
                                    <Text className="text-lg text-blue-500">Próximo &gt;</Text> 
                                </TouchableOpacity>
                            </View>)
                    }}
                />
        </View>
    )
}