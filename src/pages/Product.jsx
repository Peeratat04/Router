import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addProduct, removeProduct } from "../features/productSlice";

function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        id: productList.length + 1,
        name: `${productName} ${productList.length + 1}`,
        price: `$${productPrice}`,
        description: productDescription,
      })
    );

    setProductName("");
    setProductPrice("");
    setProductDescription("");
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="container mx-auto p-6 bg-indigo-400">
      <h2 className="text-2xl font-bold mb-4 bg-proLis">Product List ({productList.length})</h2>

      <ul className="space-y-3">
        {productList.map((product) => (
          <li
            key={product.id}
            className="flex justify-end items-center p-3 bg-gray-100 rounded-lg shadow-sm cart-pro"
          >
            <Link to={`/product/${product.id}`} className="text-lg font-semibold text-black">
              {product.name} - {product.price}
            </Link>
            <button
              onClick={() => handleRemoveProduct(product.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 remove-btn"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-4 cart-addNew">Add New Product</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddProduct();
        }}
        className="space-y-3"
      >
        <div>
          <label className="block font-medium">Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg cart-pro"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Product Price:</label>
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg cart-pro"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Product Description:</label>
          <input
            type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg "
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Products;
