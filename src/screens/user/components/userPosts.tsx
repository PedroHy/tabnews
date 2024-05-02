import PostList from "../../../components/postList";

export default function UserPosts({navigation}:{navigation:any}){
    return(
        <PostList posts={[]} navigation={navigation} load={()=>{}} />
    )
}