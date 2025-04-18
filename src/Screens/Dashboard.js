import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  StatusBar,
  ActivityIndicator,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../Styles/Styles';
import Button from '../Components/Button';
import getAllProducts from '../Services/getAllProducts';
import savePurchase from '../Services/savePurchase';
import Context from '../Services/Context';

export default function App() {
  const [listProduct, setListProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('Favoritos');
  const [currentPage, setCurrentPage] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const { listPrices, setListPrices, totalPriceSummary, setTotalPriceSummary } = useContext(Context);

  const options = [
    { category: 'Favoritos', image: require('../Assets/estrella.png') },
    { category: 'Pan', image: require('../Assets/barra.png') },
    { category: 'Bolleria', image: require('../Assets/croissant.png') },
    { category: 'Pasteleria', image: require('../Assets/pastel.png') },
    { category: 'Varios', image: require('../Assets/soda.png') },
  ];
  
  useEffect(() => {
    lockOrientation();
    getAllProd();
  }, []);

  const getAllProd = async () => {
    setIsLoading(true);
    const data = await getAllProducts();
    if (data && Array.isArray(data)) {
      setListProduct(data);
    }
    setIsLoading(false);
  };

  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  };

  const filteredProducts =
    selectedOption === 'Favoritos'
      ? listProduct.filter((product) => product.fav === true)
      : selectedOption === 'Registro'
      ? []
      : listProduct.filter((product) => product.category === selectedOption);

  // Configuración de paginación
  const COLUMNS = 3;
  const ROWS = 3;
  const ITEMS_PER_PAGE = COLUMNS * ROWS;

  const paginatedProducts = filteredProducts.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const removeItemFromCart = (index) => {
    const updatedList = [...listPrices];
    const removedItem = updatedList[index];
    updatedList.splice(index, 1);
    setListPrices(updatedList);

    const newTotalSummary = parseFloat(totalPriceSummary) - parseFloat(removedItem.totalPrice);
    setTotalPriceSummary(newTotalSummary);
  };

  const finalizePurchase = async () => {
      setIsSaving(true);  
      try {
        await savePurchase(listPrices);
        setListPrices([]);
        setTotalPriceSummary(0);
      } catch (err) {
        console.error('Error guardando la compra:', err);
      } finally {
        setIsSaving(false);
      }
  };  

  const renderItem = ({ item }) => (
    <View style={styles.buttonWrapper}>
      <Button
        text={item.name}
        imageSource={{ uri: item.image }}
        price={item.price}
        sellType={item.sellType}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <LinearGradient colors={['#FFDEE9', '#F8C291']} style={styles.background} />

      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#FF6347" />
          <Text style={styles.loadingText}>Cargando productos...</Text>
        </View>
      ) : (
        <View style={styles.mainContainer}>

          <View style={styles.sidebar}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.category}
                style={[
                  styles.sidebarButton,
                  selectedOption === option.category && styles.selectedSidebarButton,
                ]}
                onPress={() => {
                  setSelectedOption(option.category);
                  setCurrentPage(0);
                }}>
                <Image source={option.image} style={styles.sidebarImage} />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.contentContainer}>

            <View style={styles.gridContainer}>
              <>
                <FlatList
                  data={paginatedProducts}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={COLUMNS}
                  contentContainerStyle={styles.flatList}
                />
                <View style={styles.paginationContainer}>
                  {currentPage > 0 && (
                    <TouchableOpacity
                      style={styles.paginationButton}
                      onPress={() => setCurrentPage(currentPage - 1)}>
                      <Text style={styles.paginationText}>← Anterior</Text>
                    </TouchableOpacity>
                  )}
                  {(currentPage + 1) * ITEMS_PER_PAGE < filteredProducts.length && (
                    <TouchableOpacity
                      style={styles.paginationButton}
                      onPress={() => setCurrentPage(currentPage + 1)}>
                      <Text style={styles.paginationText}>Siguiente →</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </>
            </View>

            {/* Cuadro de lista de precios a la derecha */}
            <View style={styles.priceListContainer}>
              {listPrices.length === 0 ? (
                <Text style={styles.emptyCartText}>No hay artículos</Text>
              ) : (
                <View style={styles.priceListFlatListContainer}>
                  
                  {isSaving && (
                    <View style={styles.loadingOverlay}>
                      <ActivityIndicator size="large" color="#FF6347" />
                      <Text style={styles.loadingSideText}>Guardando...</Text>
                    </View>
                  )}

                  {/* Lista desplazable */}
                  <FlatList
                    data={listPrices}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.priceListFlatList}
                    renderItem={({ item, index }) => (
                      <View key={index} style={styles.cartItem}>
                        <Pressable onPress={() => removeItemFromCart(index)}>
                          <Text style={styles.paginationText}>
                            {item.name} ({item.quantity}{item.sellType == 'Unidad' ? 'x' : 'g'}) = €{item.totalPrice}
                          </Text>
                        </Pressable>
                      </View>
                    )}
                  />
                  
                  {/* Botón de Finalizar Compra */}
                  <View>
                    <TouchableOpacity style={styles.finalizeButton} onPress={finalizePurchase}>
                      <Text style={styles.finalizeButtonText}>Finalizar Compra - {totalPriceSummary.toFixed(2)}€</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
