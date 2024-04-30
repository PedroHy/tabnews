import { Text, View } from "react-native";
import Header from "../../components/header";

export default function UserView(){

    return ( 
        <View>
            <Header />
            <View>
                <Text>Nome do usuário</Text>
                <View></View>
            </View>
        </View>
    )

}