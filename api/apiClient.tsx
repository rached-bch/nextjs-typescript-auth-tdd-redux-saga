import { GraphqlClient } from "./graphqlClient";
import Apollo from "./apollo";

class ApiClient {
  graphqlClient: GraphqlClient;
  constructor(graphqlClient: GraphqlClient) {
    this.graphqlClient = graphqlClient;
  }
}

let apiClient = new ApiClient(new Apollo());

export default apiClient.graphqlClient.clientInstance;
