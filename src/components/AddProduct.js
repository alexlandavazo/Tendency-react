import React, { useState } from "react";
import Modal from "./Modal";

const AddProduct = ({ addItem, orderId }) => {
  const initialValue = { sku: "", name: "", price: "", quantity: "" };
  const initialErrors = {
    sku: false,
    name: false,
    price: false,
    quantity: false,
  };
  const [product, setProduct] = useState(initialValue);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrorsObj = Object.entries(product)
      .filter(([key, value]) => {
        return value.length === 0;
      })
      .reduce((obj, [key, value]) => {
        obj[key] = value.length === 0;
        return obj;
      }, {});
    if (Object.keys(newErrorsObj).length > 0) {
      setErrors(newErrorsObj);
    } else {
      addItem(orderId, product);
      setProduct(initialValue);
      setErrors(initialErrors);
    }
  };
  return (
    <form className="leading-loose" onSubmit={handleSubmit}>
      <div className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
        <p className="text-gray-800 font-medium">Product information</p>
        <div className="">
          <label className="block text-sm text-gray-00" htmlFor="sku">
            SKU
          </label>
          <input
            className={`w-full px-2 py-2 text-gray-700 bg-gray-200 rounded ${
              errors.sku ? "border border-red-600" : ""
            }`}
            id="sku"
            name="sku"
            type="text"
            placeholder="SKU"
            aria-label="sku"
            onChange={handleChange}
            value={product.sku}
          />
          {errors.sku ? (
            <div className={"text-red-600 text-xs"}>This field is required</div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-2">
          <label className=" block text-sm text-gray-600" htmlFor="name">
            Name
          </label>
          <input
            className={`w-full px-2 py-2 text-gray-700 bg-gray-200 rounded ${
              errors.name ? "border border-red-600" : ""
            }`}
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            aria-label="name"
            onChange={handleChange}
            value={product.name}
          />
          {errors.name ? (
            <div className={"text-red-600 text-xs"}>This field is required</div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-2">
          <label className=" block text-sm text-gray-600" htmlFor="quantity">
            Quantity
          </label>
          <input
            className={`w-full px-2 py-2 text-gray-700 bg-gray-200 rounded ${
              errors.quantity ? "border border-red-600" : ""
            }`}
            id="quantity"
            name="quantity"
            type="text"
            placeholder="Quantity"
            aria-label="quantity"
            onChange={handleChange}
            value={product.quantity}
          />
          {errors.quantity ? (
            <div className={"text-red-600 text-xs"}>This field is required</div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-2">
          <label className=" block text-sm text-gray-600" htmlFor="price">
            Price
          </label>
          <input
            className={`w-full px-2 py-2 text-gray-700 bg-gray-200 rounded ${
              errors.price ? "border border-red-600" : ""
            }`}
            id="price"
            name="price"
            type="text"
            placeholder="Price"
            aria-label="price"
            onChange={handleChange}
            value={product.price}
          />
          {errors.price ? (
            <div className={"text-red-600 text-xs"}>This field is required</div>
          ) : (
            ""
          )}
        </div>
        <div className="mt-4">
          <button
            className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
            type={"submit"}
          >
            ADD ITEM
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddProduct;
