import React, { ReactNode, isValidElement, useState } from "react";
import { Text, View } from "react-native";
import TabOption from "./tabOption";

export default function TabRoot({children}:{children: ReactNode}){

    const [selected, setSelected] = useState(0)

    const tabs = children? React.Children.map(children, (child, idx) => {
        if(isValidElement(child)){
            return {
                index: idx,
                title: child.props.title,
                content: child.props.component,
            }
        }
    }):[]
    
    return(
        <>
            <View className="flex-row">
                {tabs?.map(tab=><TabOption key={tab.index} id={tab.index} title={tab.title} selected={selected} setSelected={setSelected} />)}
            </View>
            <View className="border-t-2 border-b-2 border-zinc-300 py-2"> 
                {tabs?tabs[selected].content:null}
            </View>
        </>
    )
}