import { View, Text, Image} from "react-native";


export default function Header(){
    return (
        <View className="bg-zinc-800 h-24 justify-between items-center p-4 flex-row">
            <Image className="w-10 h-10" source={require('../../../assets/logo2.png')}/>
            <Text className="text-white underline">Entrar</Text>
        </View>
    )
}