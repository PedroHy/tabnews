import { ActivityIndicator, View } from "react-native"

const LoadComponent = () => {
    return (
        <View className="items-center justify-center h-full">
            <ActivityIndicator size="large" color="#000000" />
        </View>
    )
}

export default LoadComponent;