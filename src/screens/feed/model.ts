import { IPost } from "../../interfaces/Post";

export interface IFeedViewModel{
    posts: Array<IPost>,
    page: number,
    isRefreshing: boolean,
    onRefresh: ()=> void
    nextPage: ()=> void
    previousPage: ()=> void
}