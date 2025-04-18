const API_URL =
  'https://us-central1-hornococera.cloudfunctions.net/api/savePurchase';

const savePurchase = async (purchaseList) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'SKZQylhBf9JRgwFFecYjPgZQ2QYqFRDX',
      },
      body: JSON.stringify({ purchaseList }),
    });

    if (!response.ok) throw new Error('Error al guardar la compra');
    return await response.json();
  } catch (error) {
    console.error('Error al enviar datos a Firebase:', error);
    throw error;
  }
};

export default savePurchase;
