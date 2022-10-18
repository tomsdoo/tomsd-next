import { Config } from "apollo-server-micro";
import { Profile } from "@/modules/contentful";
// import { createClient } from "contentful";

const db = {
  articles: [
    {
      id: 1, title: "asdf", content: "asdfcontent"
    },
    {
      id: 2, title: "qwer", content: "qwercontent"
    }
  ]
}

export const resolvers: Config["resolvers"] = {
  Query: {
    article: (_, { id }: { id: number }) => db.articles.find((a) => a.id === id),
    articles: () => db.articles,
    profile: async () => await new Profile().get()
  }
}
