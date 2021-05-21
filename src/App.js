import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shopping from "./app/feature/components/Shopping";
import "bootstrap/dist/css/bootstrap.min.css";

//CONTEXT
import ProductState from "./app/core/redux/product/productState";
import CartState from "./app/core/redux/cart/cartState";
import Alertstate from "./app/core/redux/alert/alertState";

function App() {
  return (
    <Alertstate>
      <CartState>
        <ProductState>
          <Router>
            <Switch>
              <Route exact path="/" component={Shopping} />
            </Switch>
          </Router>
        </ProductState>
      </CartState>
    </Alertstate>
  );
}

export default App;
