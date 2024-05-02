import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function CommentItem({index}:{index:number}){
    return(
        <View className="p-2 flex-row">
            <Text className="w-6 text-right pr-1 font-medium">{index}.</Text>
            <View >
                <View className="flex-row">
                    <Text className="items-center leading-6" numberOfLines={6}>
                        <MaterialIcons name="messenger-outline" size={14} color="black" />
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dignissimos, omnis at exercitationem aut modi. Facere, cumque nesciunt inventore reiciendis rem optio ut quis doloremque vel, deserunt iste repudiandae. Non.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dignissimos, omnis at exercitationem aut modi. Facere, cumque nesciunt inventore reiciendis rem optio ut quis doloremque vel, deserunt iste repudiandae. Non."
                    </Text>
                </View>
            </View>
        </View>
    )
}