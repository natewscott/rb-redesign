<!DOCTYPE html>
<html>
<head>
<title>Your Shopping Cart</title>
<meta charset="utf-8" />
</head>

<body>

<div id="site">

    <div id="content">
        <h1>Your Shopping Cart</h1>
        <form id="shopping-cart" action="cart.php" method="post">
            <table class="shopping-cart">
              <thead>
                <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Qty</th>
                    <th scope="col" colspan="2">Price</th>
                </tr>
              </thead>
              <tbody>
              
              </tbody>
            </table>
            <p id="sub-total">
                <strong>Sub Total</strong>: <span id="stotal"></span>
            </p>
            <ul id="shopping-cart-actions">
                <li>
                    <input type="submit" name="update" id="update-cart" class="btn" value="Update Cart" />
                </li>
                <li>
                    <input type="submit" name="delete" id="empty-cart" class="btn" value="Empty Cart" />
                </li>
                <li>
                    <a href="index.html" class="btn">Continue Shopping</a>
                </li>
                <li>
                    <a href="checkout.html" class="btn">Go To Checkout</a>
                </li>
            </ul>
        </form>
    </div>
    
    

</div>

</body>
</html> 