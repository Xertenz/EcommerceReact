import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const context = useContext(CartContext);
  if (!context) {
    return <p>Error: CartContext not found.</p>;
  }
  const { cartItems, increaseQuantity, decreaseQuantity, deleteItem } = context;
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="checkout mt-8 mb-12">
      <div className="container mx-auto">
        <div className="ordersummery pl-3 border-2 border-(--main-color) rounded w-[600px] max-w-full mx-auto">
          <div className="cart-title">
            <h1 className="py-4 text-center font-bold text-2xl border-b border-b-(--border-color)">
              Order Summary
            </h1>
          </div>
          <div className="cart-items h-88 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-center py-8 text-gray-500">
                No items in the cart
              </p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-item py-3 pr-3 border-b last:border-b-0 border-b-(--main-color)"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="cart-item-img">
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="w-22!"
                        />
                      </div>
                      <div className="cart-item-info">
                        <h1 className="name text-[16px] font-bold mb-2">
                          {item.title}
                        </h1>
                        <p className="price mb-1.5">$ {item.price}</p>
                        <div className="quantity flex justify-start items-center gap-3 select-none">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="cursor-pointer bg-(--border-color) active:bg-[#c7c7c7d5] w-8 h-6 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="bg-(--border-color) text-(--main-color) p-1 min-w-8 h-6 flex items-center justify-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="cursor-pointer bg-(--border-color) active:bg-[#c7c7c7d5] w-8 h-6 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-delete">
                      <span
                        onClick={() => deleteItem(item.id)}
                        className="block cursor-pointer hover:scale-125 transition-transform"
                      >
                        <FaTrash className="fill-red-600" />
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="cart-summary py-3 pr-3">
            <div className="shop-table py-3 pr-4.5 border-y border-y-(--border-color)">
              <p className="flex justify-between items-center text-xl">
                <span>Total:</span>
                <span>$ {total.toFixed(2)}</span>
              </p>
            </div>
            <div className="place-order">
              <button className="text-center text-white font-bold bg-(--main-color) hover:bg-[#007acc] transition-colors w-full py-3 cursor-pointer">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
