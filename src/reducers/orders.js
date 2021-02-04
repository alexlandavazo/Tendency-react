export const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ORDER': {
      return [...state, action.order];
    }
    case 'GET_ORDERS':
      return action.orders;
    case 'REMOVE_ORDER': {
      return state.filter((order) => order.id !== action.id);
    }
    case 'ADD_ITEM': {
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
