import CommentList from "../../../components/commentList";
import IComment from "../../../interfaces/Comment";

export default function UserComments({comments}:{comments: IComment[]}){
    return(
        <CommentList comments={comments} />
    )
}