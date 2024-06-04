const calculateDiscount = (price, discountedPrice) => {
  return price > discountedPrice
    ? Math.ceil(((price - discountedPrice) / price) * 100)
    : 0;
};

export default calculateDiscount;
