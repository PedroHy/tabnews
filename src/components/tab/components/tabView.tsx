import { ReactNode } from "react";
import { View, Text } from "react-native";

export default function TabView({title, component}:{title: string, component: ReactNode}){
    return <View><Text>{title}</Text></View>
}