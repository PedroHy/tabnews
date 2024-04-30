import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Markdown from 'react-native-markdown-display'
import IComment from '../../../interfaces/Comment'
import { ReactNode } from 'react'

export default function CommentCard({ comment, children }: { comment: IComment, children?: ReactNode }) {
    return (
        <ScrollView>
            <View className="flex-row mb-2 my-4">
                <View className="w-12 items-center ">
                    <Text className="mt-2">&and;</Text>
                    <Text className="mt-2">{comment.tabcoins_credit}</Text>
                    <Text className="mt-2">&or;</Text>
                    <View className='w-0.5 h-full bg-zinc-300' />
                </View>
                <View className="w-5/6">
                    <View className="flex-row items-center gap-2">
                        <Text className="bg-blue-300 text-blue-700 py-0.5 px-1 rounded-xl text-sm">{comment.owner_username}</Text>
                        <Text className="font-semibold text-sm text-zinc-500">8 horas atrás</Text>
                    </View>
                    <View >
                        <Markdown>{comment.body}</Markdown>
                    </View>
                    <TouchableOpacity className="bg-zinc-200 border-2 border-zinc-300 w-32 py-3 rounded-lg items-center justify-center">
                        <Text className="font-bold text-md text-zinc-600">Responder</Text>
                    </TouchableOpacity>
                    {children}
                </View>
            </View>
        </ScrollView>
    )
}