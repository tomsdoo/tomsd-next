import { Config } from "apollo-server-micro";
import { createClient } from "contentful";

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
    profile: async () => await createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      environment: "master",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    }).getEntries({
      content_type: "anydoc",
      "fields.name": "tomsd-page-profile"
      // @ts-ignore
    }).then(({ items }) => items?.[0]?.fields?.json)
  }
}
