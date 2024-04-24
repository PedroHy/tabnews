import { View, Text } from 'react-native'

export default function Comment({comment}:{comment:any}) {
    return (
        <View className="flex-row h-max mb-4">
            <View className="w-12 items-center">
                <Text className="mt-2">&and;</Text>
                <Text className="mt-2">{comment.tabcoins_credit}</Text>
                <Text className="mt-2">&or;</Text>
            </View>
            <View>
                <View className="flex-row items-center gap-2">
                    <Text className="bg-blue-300 text-blue-700 py-0.5 px-1 rounded-xl text-sm">{comment.owner_username}</Text>
                    <Text className="font-semibold text-sm text-zinc-500">8 horas atrás</Text>
                </View>
                <Text className="text-base leading-2 w-5/6">{comment.body}</Text>
            </View>
        </View>
    )
}