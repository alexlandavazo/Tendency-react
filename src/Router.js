import React, {useState, useEffect} from 'react';
import {Router} from '@reach/router';
import OrderList from "./pages/OrdersList";
import Order from "./pages/Order";
import {bindActionCreators} from "redux";
import {getOrders} from "./actions/orders";
import {connect} from "react-redux";

const AppRouter = ({getOrdersAction}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getOrdersAction();
    setLoading(false);
  }, [getOrdersAction])
  if (loading) return <div>Loading</div>;
  return(
  <Router>
    <OrderList path={'/'}/>
    <Order path={'order/:orderId'}/>
  </Router>)
}
const mapDispatchToProps = (dispatch) => ({
  getOrdersAction: bindActionCreators(getOrders, dispatch),
});
export default connect(null, mapDispatchToProps)(AppRouter);
