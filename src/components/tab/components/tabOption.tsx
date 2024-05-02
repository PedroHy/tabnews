import { Text, TouchableOpacity } from "react-native";


export default function TabOption({selected, setSelected, title, id}:{id: number, title: string, selected: number, setSelected: any}){
    return(
        <TouchableOpacity className={selected==id?"p-4 border-2 border-b-0 border-zinc-300 rounded-t":"p-4"} onPress={()=>setSelected(id)}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}