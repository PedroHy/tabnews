import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import Header from "../../components/header";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/Post";
import Markdown from 'react-native-markdown-display';



export default function Post({ navigation, route }:{ navigation: any, route: any}){

    const [post, setPost] = useState<IPost>();
    const {user, slug} = route.params;

    const loadPost = async ()=>{
        let postSnap = await api.get(`/contents/${user}/${slug}`)
        console.log(postSnap.data)
        setPost(postSnap.data)
    }

    useEffect(()=>{
        loadPost()
    }, [])

    if(!post) {
        return (
            <View className="items-center justify-center flex-1">
                <ActivityIndicator size="large" color="#000000" />
            </View>
        )
    }

    return (
        <View>
            <Header />
            <ScrollView>
                <ScrollView>
                    <View className="flex-row">
                        <View className="w-12 items-center">
                            <Text className="mt-4">&and;</Text>
                            <Text className="mt-4">2</Text>
                            <Text className="mt-4">&or;</Text>
                            <View className="mt-2 w-0.5 h-full bg-zinc-300" />
                        </View>
                        <View className="p-2">
                            <View className="flex-row items-center gap-2">
                                <Text className="bg-blue-300 text-blue-700 py-1 px-2 rounded-xl">{post.owner_username}</Text>
                                <Text className="font-semibold text-zinc-500">1 min de leitura</Text>
                                <Text className="font-semibold text-zinc-500">20 horas atrás</Text>
                            </View>
                            <View className="mt-2 w-11/12">
                                <Text className="text-4xl font-semibold my-2">{post.title}</Text>
                                <Markdown>{post.body}</Markdown>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View className="h-96" />
            </ScrollView>
        </View>
    )
}