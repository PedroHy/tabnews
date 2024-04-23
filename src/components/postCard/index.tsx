import { View, Text, TouchableOpacity} from "react-native";
import { IPost } from "../../interfaces/Post";

export default function PostCard({post, index, onPress}:{post: IPost, index:number, onPress:any}){
    return(
        <View className="p-2 flex-row">
            <Text className="text-lg w-12 text-right pr-2 font-medium">{index}.</Text>
            <View className="pr-1">
                <TouchableOpacity onPress={onPress}>
                    <Text className="text-lg w-80 text-black font-medium leading-5">{post.title}</Text>
                </TouchableOpacity>
                <View className="flex-row gap-2">
                    <Text className="text-sm text-gray-600">{post.tabcoins} tabcoins</Text>
                    <Text className="text-sm text-gray-600">{post.owner_username}</Text>
                </View>
            </ View>
        </ View>
    )
}