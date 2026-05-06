import {View, Text, Image, TextInput} from "react-native";
import {icons} from "@/constants/icons";

interface Props {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
    return (
        <View className="flex-row items-center px-5 py-4 bg-dark-200 rounded-full">
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />
            <TextInput
                placeholder={placeholder}
                value=""
                placeholderTextColor="#a8b5db"
                onPress={onPress}
                onChangeText={() => {}}
                className="flex-1 ml-2 text-white"
            />
        </View>
    )
}



export default SearchBar;