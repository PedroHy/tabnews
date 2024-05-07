import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import IComment from "../../../interfaces/Comment";

export default function CommentItem({index, comment}:{index:number, comment: IComment}){
    return(
        <View className="p-2 flex-row">
            <Text className="w-6 text-right pr-1 font-medium">{index}.</Text>
            <View >
                <View className="flex-row">
                    <Text className="items-center leading-5" numberOfLines={6}>
                        <MaterialIcons name="messenger-outline" size={14} color="black" />
                        {comment.body}
                    </Text>
                </View>
            </View>
        </View>
    )
}