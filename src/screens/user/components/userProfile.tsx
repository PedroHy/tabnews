import { ScrollView, Text, View } from "react-native";
import Markdown from "react-native-markdown-display";
import EconomyProps from "../../../components/economyProps";


export default function UserProfile({user}:{user: IUser}){
    return(
        <ScrollView className="py-2 h-4/5">
            <EconomyProps tabcoins={user.tabcoins} tabcash={user.tabcash} />
            
            {user.description?
            <View>
                <Text className="font-bold text-lg">Descrição</Text>
                <View className="border-2 border-zinc-300 p-1 pb-6">
                    <Markdown>
                        {user.description}
                    </Markdown>
                </View>
            </View>
            :null}
        </ScrollView>
    )
}