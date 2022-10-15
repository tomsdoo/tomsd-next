import { gql, Config } from "apollo-server-micro";

export const typeDefs: Config["typeDefs"] = gql(`
  type Article {
    id: Int
    title: String
    content: String
  }

  type Query {
    article(id: Int): Article
    articles: [Article]
  }
`);
