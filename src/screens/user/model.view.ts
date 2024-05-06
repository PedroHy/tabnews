import { useEffect, useState } from "react";
import api from "../../services/api";


export default function useUserModelView({route}:{route:any}){
    //get user id
    const { userId } = route.params;
    const [ user, setUser ] = useState<IUser>();

    //get userInfos
    const getUser = async ()=>{
        const userSnap = await api.get(`users/${userId}`);
        setUser(userSnap.data);
    }

    //get userPosts

    //get userComments

    //return data

    useEffect(()=>{
        getUser()
    }, [])
    return{
        user
    }
}