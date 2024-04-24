import IComment from "../../interfaces/Comment"
import { IPost } from "../../interfaces/Post"

export default interface IPostView{
    post: IPost 
    comments: IComment
}