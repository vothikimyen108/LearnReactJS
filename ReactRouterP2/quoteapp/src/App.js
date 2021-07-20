import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./Pages/AllQuote";
import QuoteDetail from "./Pages/QuoteDetail";
import NewQuote from "./Pages/NewQuote";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
