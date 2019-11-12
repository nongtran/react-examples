import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const AddUser = React.lazy(() => import('./components/users/AddUser'));
const EditUser = React.lazy(() => import('./components/users/EditUser'));
const ListUser = React.lazy(() => import('./components/users/ListUser'));

class Routes extends Switch {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route
        path="/users"
        exact
        component={ListUser}
        props={this.props}
      />
      <Route
        path="/users/add"
        exact
        component={AddUser}
        props={this.props}
      />
      <Route
        path="/users/edit"
        exact
        component={EditUser}
        props={this.props}
      />
    </Switch>
    </Suspense>
    )
  }
}

export default Routes;

