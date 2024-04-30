import { Text, TouchableOpacity, View } from "react-native";

export default function AnswerCard() {

    return (
        <View className="p-4 w-11/12 my-6 border-2 border-zinc-300 rounded-xl justify-center">
            <TouchableOpacity className="bg-zinc-200 border-2 border-zinc-300 w-32 py-3 rounded-lg items-center justify-center">
                <Text className="font-bold text-md text-zinc-600">Responder</Text>
            </TouchableOpacity>
        </View>
    )
}