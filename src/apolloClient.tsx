import {
  ApolloClient,
  InMemoryCache,
  defaultDataIdFromObject,
} from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import { API_URL, API_KEY } from "./environment";

const cache = new InMemoryCache({
  dataIdFromObject(responseObject) {
    if ("nodeId" in responseObject) {
      return `${responseObject.nodeId}`;
    }

    return defaultDataIdFromObject(responseObject);
  },
  possibleTypes: { Node: ["TODO"] },
  typePolicies: {
    Query: {
      fields: {
        todosCollection: relayStylePagination(),
        node: {
          read(_, { args, toReference }) {
            const ref = toReference({
              nodeId: args?.nodeId,
            });
            return ref;
          },
        },
      },
    },
  },
});
export const apolloClient = new ApolloClient({
  cache: cache,
  uri: API_URL,
  headers: {
    apiKey: API_KEY,
  },
});
