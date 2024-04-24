import { View, TouchableOpacity, Text} from 'react-native'

const PageControl = ({page, nextPage, previousPage}:{page: number, nextPage:()=>void, previousPage:()=>void})=>{
    return(
        <View className="h-32 flex-row justify-center gap-4 pt-6">
            <TouchableOpacity disabled={page==1?true:false} onPress={previousPage}>
                <Text className={page!=1?"text-lg text-blue-500":"text-zinc-500 text-lg"}>&lt; Anterior</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={nextPage}>
                <Text className="text-lg text-blue-500">Próximo &gt;</Text> 
            </TouchableOpacity>
        </View>)
}

export default PageControl;