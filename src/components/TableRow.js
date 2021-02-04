import React from 'react';
import {navigate} from '@reach/router';

const TableRow = ({rowData, isOrder}) =>{
  const handleClick = () => {
    if(isOrder){
      navigate(`order/${rowData.id}`).then();
    }
  }
return (
  <tr onClick={handleClick}>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div className="flex items-center">
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">
            {isOrder ? rowData.number: rowData.sku}
          </p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{isOrder ? rowData.items.length: rowData.name}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
        {isOrder ? rowData.totals.total : rowData.quantity}
      </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span
                                      className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">

                                        <span className="relative">{isOrder? rowData.payment.status: rowData.price}</span>
                                    </span>
    </td>
  </tr>
)
}
export default TableRow;
