const getAllProducts = async () => {
  try {
    const response = await fetch(
      'https://us-central1-hornococera.cloudfunctions.net/api/getAllProducts',
      {
        method: 'GET',
        headers: {
          'x-api-key': 'SKZQylhBf9JRgwFFecYjPgZQ2QYqFRDX',
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getAllProducts;
