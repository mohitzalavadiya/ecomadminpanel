import Layout from "./container/layout/Layout";
import {Route, Switch} from 'react-router-dom'
import Product from "./component/product/Product";


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/product" exact component={Product} />
      </Switch>
    </Layout>
  );
}

export default App;
