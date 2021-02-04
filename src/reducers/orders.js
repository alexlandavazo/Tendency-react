export const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ORDERS":
      return action.orders;
    case "ADD_ITEM": {
      return state.map((order) => {
        if (order.id === action.id) {
          order.items = [...order.items, action.item];
          return order;
        } else {
          return order;
        }
      });
    }
    default:
      return state;
  }
};
