import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { client } from './lib/apollo'
import { Event } from './pages/Event'
import { Router } from './Router'
import './styles/global.css'

export function App() {

  return (
    <>
      {/* <Event/> */}
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </ApolloProvider>
    </>
  )
}

