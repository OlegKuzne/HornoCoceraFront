import { useRef, useContext } from "react";
import { Animated, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles/Styles";
import Context from '../Services/Context';
import { handlePressIn, handlePressOut } from '../Utils/animationUtils';

export default function Button({ text, imageSource, price, sellType }) {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const { setImageModal, setPriceModal, setSellTypeModal, setTextModal } = useContext(Context);
  const navigation = useNavigation();

  const handleOnPress = () => {
    setImageModal(imageSource); 
    setPriceModal(price);
    setSellTypeModal(sellType);
    setTextModal(text);
    navigation.navigate('Modal');
  };

  return (
    <Pressable 
      onPressIn={() => handlePressIn(scaleValue)} 
      onPressOut={() => handlePressOut(scaleValue)}
      onPress={handleOnPress}
    >
      <Animated.View style={[styles.button, { transform: [{ scale: scaleValue }] }]}>
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
}
