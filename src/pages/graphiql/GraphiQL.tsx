import { GraphiQL as OriginalGraphiQL } from "graphiql";
import { createGraphiQLFetcher } from "@graphiql/toolkit";

import { API_KEY, API_URL } from "../../environment";
import "graphiql/graphiql.css";

const fetcher = createGraphiQLFetcher({
  url: API_URL,
  headers: {
    apiKey: API_KEY,
  },
});

export default function GraphiQL() {
  return <OriginalGraphiQL fetcher={fetcher} />;
}
