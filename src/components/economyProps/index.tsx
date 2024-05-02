import { Text, View } from "react-native";

export default function EconomyProps({ tabcoins, tabcash }: { tabcoins: number, tabcash: number }) {
    return (
        <View className="flex-row gap-2 py-2">
            <View className="flex-row items-center gap-1">
                <View className="w-3 h-3 bg-blue-600 rounded" />
                <Text>{tabcoins} TabCoins</Text>
            </View>
            <View className="flex-row items-center gap-1">
                <View className="w-3 h-3 bg-green-600 rounded" />
                <Text>{tabcash} TabCash</Text>
            </View>
        </View>
    )
}