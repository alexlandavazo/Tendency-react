import React from 'react';
import {navigate} from '@reach/router';

const OrderRow = ({order}) =>{
return (
  <tr onClick={()=> navigate(`order/${order.id}`)}>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div className="flex items-center">
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">
            {order.number}
          </p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{order.items.length}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
        {order.totals.total}
      </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                      className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span className="relative">{order.payment.status}</span>
                                    </span>
    </td>
  </tr>
)
}
export default OrderRow;
