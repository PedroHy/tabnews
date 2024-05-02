import { IPost } from "../../interfaces/Post";

export interface IFeedViewModel{
    posts: Array<IPost>,
    page: number,
    loadFeed: ()=> void
}