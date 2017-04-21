import { ApolloClient, createNetworkInterface } from 'react-apollo'
import AppConfig from '../Config/AppConfig'

const networkInterface = createNetworkInterface({
  uri: AppConfig.apolloEndpoint
})

export const client = new ApolloClient({
  networkInterface: networkInterface
})
