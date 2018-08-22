export const addToCart = onj => ({
  type: 'ADD_TO_CART',
  payload: onj,
});

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});