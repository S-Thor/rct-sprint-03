import React,{useContext, useState, useEffect} from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({id, name,description}) => {
  // Note: this id should come from api
  // const product = { id: 1 };
  const {
    getCartItemCountByProductId,
    addItemToCart,
    removeItemFromCart,
    updateItemCount,
  } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleUpdate = async (newCount) => {
    await updateItemCount(id, newCount);
    setCount(newCount);
  };

  const handleDelete = async () => {
    await removeItemFromCart(id);
    setCount(0);
  };

  useEffect(() => {
    if (id) {
      setCount(getCartItemCountByProductId(id));
    }
  }, [id, getCartItemCountByProductId]);
  return (
    <div data-cy="product" className="border-2 border-solid border-black rounded-2xl p-5 min-w-full">
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      {count === 0 ? (
        <button data-cy="product-add-item-to-cart-button"
          onClick={() => {
            addItemToCart({
              productId: id,
              count: 1,
            });
          }}>Add to Cart</button>
      ) : ( 
        <div>
        <button data-cy="product-increment-cart-item-count-button"
          onClick={() => handleUpdate(count + 1)}>+</button>
        <span data-cy="product-count">
          {
            {count}
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"
          onClick={handleUpdate(count - 1)}>-</button>
        <button data-cy="product-remove-cart-item-button"
          onClick={handleDelete}>Remove from cart</button>
      </div>
      )}
      
      
    </div>
  );
};

export default Product;
