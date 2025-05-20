import { useContext, useState, useRef, useEffect } from 'react';
import {
  View,
  Image,
  Pressable,
  TextInput,
  Animated,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Context from '../Services/Context';
import styles from '../Styles/Styles';
import { handlePressIn, handlePressOut } from '../Utils/animationUtils';

const Modal = ({ navigation }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const { imageModal, priceModal, sellTypeModal, textModal, listPrices, setListPrices, totalPriceSummary, setTotalPriceSummary } =
    useContext(Context);
  const [inputValue, setInputValue] = useState('');
  const [totalPrice, setTotalPrice] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); 

  const handleInputChange = (text) => {
    setInputValue(text);
    const numericValue = parseFloat(text);
    if (!isNaN(numericValue)) {
      let calculatedTotal;
      if (sellTypeModal === 'Peso') {
        calculatedTotal = (numericValue / 1000) * priceModal;
      } else {
        calculatedTotal = numericValue * priceModal;
      }
      setTotalPrice(calculatedTotal.toFixed(2));
    } else {
      setTotalPrice(null);
    }
  };

  const handleDoneEditing = () => {
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue) && numericValue > 0) {
      const existingProductIndex = listPrices.findIndex(item => item.name === textModal);

      if (existingProductIndex !== -1) {
        const updatedList = [...listPrices];
        updatedList[existingProductIndex].quantity += numericValue;
        if (sellTypeModal === 'Peso') {
          updatedList[existingProductIndex].totalPrice = 
            ((updatedList[existingProductIndex].quantity / 1000) * priceModal).toFixed(2);
        } else {
          updatedList[existingProductIndex].totalPrice = 
            (updatedList[existingProductIndex].quantity * priceModal).toFixed(2);
        }
        setListPrices(updatedList);
      } else {
        const newEntry = {
          name: textModal,
          quantity: numericValue,
          sellType: sellTypeModal,
          totalPrice: totalPrice,
        };
        setListPrices([...listPrices, newEntry]);
      }

      setTotalPriceSummary(totalPriceSummary + parseFloat(totalPrice));

    }
    navigation.goBack();
  };

  return (
    <View style={styles.modalContainer}>
      <LinearGradient colors={['#8B5E3C', '#D2B48C']} style={styles.modalGradient}>
        <View style={styles.modalHeader}>
          <Pressable
            onPressIn={() => handlePressIn(scaleValue)}
            onPressOut={() => handlePressOut(scaleValue)}
            onPress={() => navigation.goBack()}>
            <Animated.View style={[styles.animationStyle, { transform: [{ scale: scaleValue }] }]}>
              <Image
                source={require('../Assets/cerrar.png')}
                style={styles.modalCloseButtonImage}
                resizeMode="contain"
              />
            </Animated.View>
          </Pressable>
        </View>

        <Text style={styles.modalText}>{textModal}</Text>

        <Image source={imageModal} style={styles.modalImage} resizeMode="contain" />

        {totalPrice !== null && (
          <View style={styles.modalButtonContainer}>
            <Text style={styles.modalTotalPriceText}>€{totalPrice}</Text>
          </View>
        )}
        
        <TextInput
          ref={inputRef}
          style={styles.modalInput}
          placeholder={`Introduce ${sellTypeModal.toLowerCase()}`}
          keyboardType="numeric"
          value={inputValue}
          onChangeText={handleInputChange}
          onEndEditing={handleDoneEditing}
        />

      </LinearGradient>
    </View>
  );
};

export default Modal;
