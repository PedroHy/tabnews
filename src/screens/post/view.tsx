import { ScrollView, SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import Header from "../../components/header";
import Comment from "../../components/comment";
import LoadComponent from "../../components/loadComponent";
import usePostModelView from "./model.view";
import { PostComponent } from "./components/postComponent";
import AnswerCard from "../../components/answerCard";


export default function PostView({ route }: { route: any }) {

    const { post, comments } = usePostModelView({ route });

    return (
        <SafeAreaView className="relative">
            <View>
                <Header />
                <View className="pt-24">
                    {!post ? <LoadComponent /> :
                        <ScrollView>
                            <PostComponent post={post} />
                            <View className="items-center"><AnswerCard /></View>
                            {comments.map((comment) => {
                                return <Comment key={comment.id} comment={comment} />
                            })}
                        </ScrollView>}
                </View>
            </View>
        </SafeAreaView>
    )
}