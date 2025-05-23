import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  animationStyle:{},
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mainContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  sidebar: {
    width: 120,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonHeader: {
    marginLeft: 50,
  },
  sidebarImage: {
    width: 70,
    height: 70,
  },
  sidebarButton: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: '#546E7A',
    borderTopEndRadius: 50,
    borderBottomEndRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  selectedSidebarButton: {
    backgroundColor: '#1E88E5',
  },
  contentContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  gridContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paginationButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    marginBottom: 80,
  },
  paginationText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  priceListContainer: {
    flex: 1,
    backgroundColor: '#111928BF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF20',
    padding: 10,
    margin: 35,
    height: 630,
  },
  priceListFlatListContainer: {
    flex: 1,
  },
  priceListFlatList: {
    flexGrow: 1,
  },
  emptyCartText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'column',
    marginVertical: 5,
  },
  cartItemText: {
    fontSize: 25,
    color: 'white',
  },
  finalizeButtonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    alignItems: 'center',
  },
  finalizeButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  finalizeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  flatList: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonWrapper: {
    width: 160,
    height: 160,
    margin: 18,
  },
  button: {
    width: 160,
    height: 160,
    backgroundColor: '#B0BEC5',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
  },
  image: {
    width: 90,
    height: 90,
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#263238',
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#FF6347',
  },
  recordText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#37474F',
    marginTop: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeader: {
    position: 'absolute',
    top: 140,
    right: 400,
    margin: 10,
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    marginTop: 20,
    width: '25%',
    height: '25%',
  },
  modalAcceptButton: {
    marginLeft: 15,
  },
  modalText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  modalButtonContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCloseButtonImage: {
    width: 80,
    height: 80,
  },
  modalAcceptButtonImage: {
    width: 50,
    height: 50,
  },
  modalInput: {
    width: '25%',
    height: 60,
    backgroundColor: '#FFF5EE',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 26,
    textAlign: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#8B5E3C',
  },
  modalTotalPriceText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  loadingSideText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
});
