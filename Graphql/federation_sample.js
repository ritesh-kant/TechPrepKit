const { ApolloServer } = require('apollo-server');
const { ApolloGateway, RemoteGraphQLDataSource } = require('@apollo/gateway');

// Custom data source class to add custom logic to outgoing requests
class CustomDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    // Add custom headers or other request modifications here
    if (context.authToken) {
      request.http.headers.set('Authorization', context.authToken);
    }
    request.http.headers.set('x-custom-header', 'custom-value');
  }
}

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'accounts', url: 'http://localhost:4001/graphql' },
    { name: 'products', url: 'http://localhost:4002/graphql' },
    // Add other services as needed
  ],
  // Override buildService to use the custom data source
  buildService({ name, url }) {
    return new CustomDataSource({ url });
  },
});

const server = new ApolloServer({
  gateway,
  subscriptions: false, // Subscriptions are not currently supported with ApolloGateway
  context: ({ req }) => {
    // Pass the authentication token and any other context data to the context
    const authToken = req.headers.authorization || '';
    return { authToken };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
