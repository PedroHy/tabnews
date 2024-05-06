import { View, Text, Image} from "react-native";


export default function Header(){
    return (
        <View className="bg-zinc-800 h-24 w-full justify-between items-center p-4 flex-row absolute top-0">
            <Image className="w-10 h-10" source={require('../../../assets/logo2.png')}/>
            <Text className="text-white underline">Entrar</Text>
        </View>
    )
}