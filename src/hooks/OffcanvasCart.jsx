const OffcanvasCart = ({ show, onClose, cartItems = [], onRemove }) => {
  return (
    <>
      {/* Backdrop */}
      {show && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Offcanvas panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-red-100 via-red-50 to-white
          shadow-2xl rounded-l-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${show ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
        tabIndex={-1}
        aria-labelledby="offcanvasCartLabel"
      >
        <div className="flex justify-between items-center p-4 border-b border-red-300">
          <h2
            className="text-2xl font-bold text-red-700"
            id="offcanvasCartLabel"
          >
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="text-red-700 hover:text-red-900 text-3xl font-extrabold"
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>

        <div className="p-4 flex-grow overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-red-600 italic text-center mt-10">
              Your cart is empty.
            </p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.idMeal}
                  className="flex justify-between items-center border-b border-red-200 pb-2"
                >
                  <span className="text-red-800 font-medium">{item.strMeal}</span>
                  {onRemove && (
                    <button
                      onClick={() => onRemove(item.idMeal)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded shadow"
                      aria-label={`Remove ${item.strMeal} from cart`}
                    >
                      Remove
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default OffcanvasCart;
