import React, { useState, Fragment } from 'react'


const App = () => {

	return (
		<div></div>
	)
}

App.getInitialProps = async ({ req, res }) => {
	// const res = await fetch('https://api.github.com/repos/zeit/next.js')
	// const json = await res.json()
	// Data
	const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	]

	return { usersData: usersData }
}

export default App
