import { useEffect, useState } from "react";
import api from "../../services/api";
import IComment from "../../interfaces/Comment";
import { IPost } from "../../interfaces/Post";


export default function useUserModelView({route}:{route:any}){
    //get user id
    const { userId } = route.params;
    const [ user, setUser ] = useState<IUser>();
    const [ posts, setPosts ] = useState<IPost[]>();
    const [ comments, setComments ] = useState<IComment[]>();

    //get userInfos
    const getUser = async ()=>{
        const userSnap = await api.get(`users/${userId}`);
        setUser(userSnap.data);
    }

    //get userPosts
    const filterUserContent = async ()=>{
        const contentSnap = await api.get(`contents/${userId}`);
        const commentsSnap = contentSnap.data.filter((item:IComment)=>item.parent_id != null)
        const postsSnap = contentSnap.data.filter((item:IPost)=>item.parent_id == null)

        setComments(commentsSnap);
        setPosts(postsSnap);
    }
    

    useEffect(()=>{
        getUser()
        filterUserContent();
    }, [])

    return{
        user,
        posts,
        comments
    }
}