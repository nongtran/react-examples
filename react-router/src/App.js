import React from 'react'
import { withRouter, NavLink } from "react-router-dom";
import Routes from "./Routes";

const App = (props) => {
	return (
		<div className="container">
			<h1>CRUD App with Redux</h1>
			<div className="flex-row">
				<NavLink exact strict to="/users" 
					activeStyle={{
					fontWeight: "bold",
					color: "red"
					}} 
					isActive={(match, location) => {
    					if (!match) {
      						return false;
    					}
					}}
				>
					List User
				</NavLink>
				<span> | </span>
				<NavLink exact strict to="/users/add" 
					activeStyle={{
						fontWeight: "bold",
						color: "red"
					}}
					isActive={(match, location) => {
    					if (!match) {
      						return false;
    					}
					}}
				>
					Add User
				</NavLink>
			</div>
			<div className="flex-row">
				<div className="flex-large">
					<Routes/>
				</div>
			</div>
		</div>
	)
}
  
export default withRouter(App);
