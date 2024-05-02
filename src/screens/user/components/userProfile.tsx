import { Text, View } from "react-native";
import Markdown from "react-native-markdown-display";
import EconomyProps from "../../../components/economyProps";


export default function UserProfile(){
    return(
        <View className="py-2">
            <EconomyProps tabcoins={12} tabcash={5} />
            <Text className="text-lg py-2">Membro a x tempo</Text>
            <View>
                <Text>Descrição</Text>
                <View>
                    <Markdown>
                        ""
                    </Markdown>
                </View>
            </View>
        </View>
    )
}