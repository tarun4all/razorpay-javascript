var Razorpay = require("razorpay");

var instance = new Razorpay({
    key_id: '',
    key_secret: '',
});

var options = {
    amount: 50000,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
    payment_capture: '0'
  };
  
instance.orders.create(options, function(err, order) {
    console.log(order);
});