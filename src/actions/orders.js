import {api} from '../api/Connection';
export const getOrdersState = (orders) => {
  return {
    type: 'GET_ORDERS',
    orders: orders,
  };
};

export const removeOrder = (id) => {
  return {
    type: 'REMOVE_ORDER',
    id: id,
  };
};

export const addItem = (id, item) => {
  return {
    type: 'ADD_ITEM',
    id: id,
    item: item
  };
};
export const addOrder = (order) => {
  return {
    type: 'ADD_ORDER',
    order: order,
  };
};

export const getOrders = () => (dispatch) => {
  try {
    api().get('orders').then(response => {
      const orders = response.data.orders;
      dispatch(getOrdersState(orders))
    }).catch(err => console.error(err));
  } catch (err) {
    console.log(err);
  }
};
