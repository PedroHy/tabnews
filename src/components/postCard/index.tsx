import { View, Text } from "react-native";
import { IPost } from "../../interfaces/Post";

export default function PostCard({post, index}:{post: IPost, index:number}){
    return(
        <View className="px-2 py-1 flex-row">
            <Text className="text-lg w-8 text-right pr-2 font-medium">{index+1}.</Text>
            <View className="pr-1">
                <Text className="text-lg w-80 text-black font-medium">{post.title}</Text>
                <View className="flex-row gap-2">
                    <Text className="text-sm text-gray-600">{post.tabcoins} tabcoins</Text>
                    <Text className="text-sm text-gray-600">{post.owner_username}</Text>
                    <Text className="text-sm text-gray-600">time</Text>
                </View>
            </ View>
        </ View>
    )
}