import { Text, View, ScrollView } from "react-native"
import { IPost } from "../../../interfaces/Post"
import Markdown from "react-native-markdown-display"

const PostComponent = ({post}:{post:IPost}) => {
    return (
        <ScrollView>
            <View className="flex-row">
                <View className="w-12 items-center">
                    <Text className="mt-4">&and;</Text>
                    <Text className="mt-4">{post.tabcoins_credit}</Text>
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
    )
}

export { PostComponent }