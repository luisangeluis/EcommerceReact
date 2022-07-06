const getConfigPurchases = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default getConfigPurchases;
