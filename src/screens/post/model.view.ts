import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/Post";
import IComment from "../../interfaces/Comment";
import api from "../../services/api";

export default function usePostModelView({route}:{route:any}){
    const [post, setPost] = useState<IPost>();
    const [comments, setComments] = useState<Array<IComment>>([]);
    const {user, slug} = route.params;

    const loadPost = async ()=>{
        let postSnap = await api.get(`/contents/${user}/${slug}`)
        setPost(postSnap.data)
    }

    const loadComments = async ()=> {
        let commentsSnap = await api.get(`/contents/${user}/${slug}/children`)
        setComments(commentsSnap.data)
    }

    useEffect(()=>{
        loadPost()
        loadComments()
    }, [])

    return {
        post, 
        comments
    }
}