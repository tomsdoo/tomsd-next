import { gql, Config } from "apollo-server-micro";

export const typeDefs: Config["typeDefs"] = gql(`
  type Article {
    id: Int
    title: String
    content: String
  }

  type Certificate {
    title: String
    when: String
  }

  type TechLink {
    name: String
    image: String
    url: String
    shortName: String
  }

  type Profile {
    name: String
    photo: String
    title: String
    description: String
    location: String
    certificates: [Certificate]
    favorites: [String]
    links: [TechLink]
  }

  type Skill {
    title: String
    years: Int
    description: String
    web: Boolean
  }

  type Query {
    article(id: Int): Article
    articles: [Article]
    profile: Profile
    skills: [Skill]
  }
`);
