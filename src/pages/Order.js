import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TableRow from "../components/TableRow";
import { bindActionCreators } from "redux";
import { addItem } from "../actions/orders";
import { navigate } from "@reach/router";
import AddProduct from "../components/AddProduct";
import CompleteOrder from "../components/CompleteOrder";

const Order = ({ orderId, orders, addItemAction }) => {
  const [order, setOrder] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const activeOrder = orders.find((order) => order.id === orderId);
    setOrder(activeOrder);
  }, [orderId, orders]);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <span
            className="text-4xl font-bold leading-tight underline text-blue-400"
            onClick={() => navigate("/")}
          >
            Go to Orders
          </span>
          <h2 className="text-2xl font-semibold leading-tight">
            Order: {order?.number}
          </h2>
        </div>
        <div className="flex justify-end -mt-16">
          {" "}
          <span
            className="px-4 py-4 text-white font-light tracking-wider bg-green-800 rounded"
            onClick={() => {
              setShowModal(true);
            }}
          >
            COMPLETE PAYMENT
          </span>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    SKU
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {order?.items?.map((item) => (
                  <TableRow rowData={item} key={item.id} isOrder={false} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <AddProduct addItem={addItemAction} orderId={orderId} />
        {showModal ? <CompleteOrder /> : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  orders: state.orders,
});
const mapDispatchToProps = (dispatch) => ({
  addItemAction: bindActionCreators(addItem, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Order);
