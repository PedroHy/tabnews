import PostList from "../../../components/postList";
import { IPost } from "../../../interfaces/Post";

export default function UserPosts({navigation, posts}:{navigation:any, posts: IPost[]}){
    return(
        <PostList posts={posts} navigation={navigation} load={()=>{}} />
    )
}