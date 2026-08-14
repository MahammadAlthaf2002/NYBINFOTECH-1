function Cart({ cart }) {

  var total = cart.reduce(function(sum, product) {
    return sum + product.price;
  }, 0);

  return (
    <div>

      <h1>Shopping Cart 🛒</h1>

      {cart.length === 0 ? (

        <p>Your cart is empty.</p>

      ) : (

        <div>

          {cart.map(function(product) {

            return (
              <div key={product.id}>

                <h3>{product.name}</h3>

                <p>₹{product.price}</p>

              </div>
            );

          })}

          <hr />

          <h2>
            Total: ₹{total}
          </h2>

        </div>

      )}

    </div>
  );
}

export default Cart;