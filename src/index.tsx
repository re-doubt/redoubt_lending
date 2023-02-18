import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import ReactGA from 'react-ga'

import { TRACKING_ID } from './constants/analytics'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Home } from './pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

if (TRACKING_ID !== undefined) {
	ReactGA.initialize(TRACKING_ID)
	ReactGA.pageview(window.location.pathname + window.location.search)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	}
])

const queryClient = new QueryClient()

const theme = createTheme({
	palette: {
		primary: {
			main: '#0088CC'
		},
		secondary: {
			main: '#E7EFF7'
		},
		error: {
			main: '#EC5540'
		},
		success: {
			main: '#40EC51'
		},
		text: {
			disabled: '#41414a',
			primary: '#232328',
			secondary: '#000000'
		},
		contrastThreshold: 3,
		tonalOffset: 0.2
	}
})

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
