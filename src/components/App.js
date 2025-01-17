import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./Layout";
import Pick from "./summaries/Pick";
import Home from "./Home";

export default function App() {
    // TODO show error message if no route match?
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/summaries/pick" component={Pick} />
                </Switch>
            </Layout>
        </Router>
    );
}
