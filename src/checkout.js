function checkout(subtotal, discountCode) {
  let total = subtotal;
  if (subtotal >= 100 && subtotal < 200) {
    total = subtotal * 0.9;
  } else if (subtotal >= 200) {
    total = subtotal * 0.8;
  }
  if (discountCode === "SAVE10") {
    total = total * 0.9;
  } else if (discountCode === "SAVE20") {
    total = total * 0.8;
  }
  if (total > 100) {
    console.log("Free shipping!");
  }
  return total;
}
exports.checkout = checkout;
