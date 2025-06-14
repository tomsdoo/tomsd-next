import {
  Artifacts,
  Histories,
  Profile,
  Skills,
  Stories,
} from "@/modules/contentful";

const db = {
  articles: [
    {
      id: 1,
      title: "asdf",
      content: "asdfcontent",
    },
    {
      id: 2,
      title: "qwer",
      content: "qwercontent",
    },
  ],
};

export const resolvers = {
  Query: {
    article: (_, { id }: { id: number }) =>
      db.articles.find((a) => a.id === id),
    articles: () => db.articles,
    artifacts: async () => await new Artifacts().get(),
    profile: async () => await new Profile().get(),
    skills: async () => await new Skills().get(),
    stories: async () => await new Stories().get(),
    histories: async () => await new Histories().get(),
  },
};
