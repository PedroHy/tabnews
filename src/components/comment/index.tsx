import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Markdown from 'react-native-markdown-display'
import CommentCard from './components/commentCard'
import IComment from '../../interfaces/Comment'

export default function Comment({ comment }: { comment: IComment }) {
    return (
        <CommentCard comment={comment}>
            {comment.children.map(answer => <CommentCard comment={answer} />)}
        </CommentCard>
    )
}