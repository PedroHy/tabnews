import { ScrollView, SafeAreaView } from "react-native";
import Header from "../../components/header";
import Comment from "../../components/comment";
import LoadComponent from "../../components/loadComponent";
import usePostModelView from "./model.view";
import { PostComponent } from "./components/postComponent";


export default function PostView({ route }:{ route: any}){

    const { post, comments } = usePostModelView({ route });

    return (
        <SafeAreaView>
            <Header />
            {!post?<LoadComponent />:
            <ScrollView>
                <PostComponent post={post} />
                {comments.map((comment)=>{
                    return <Comment key={comment.id} comment={comment} />
                })}
            </ScrollView>}
        </SafeAreaView>
    )
}