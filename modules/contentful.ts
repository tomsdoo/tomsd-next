import { createClient, ContentfulClientApi } from "contentful";

export class ContentfulClient {
  protected client: ContentfulClientApi;
  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      environment: "master",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }
  public async getEntries<T = unknown>(query?: any) {
    return await this.client.getEntries<T>(query);
  }
}

export class Profile extends ContentfulClient {
  public async get() {
    return await this.getEntries<{ json: object }>({
      content_type: "anydoc",
      "fields.name": "tomsd-page-profile",
    }).then(({ items }) => items?.[0]?.fields?.json);
  }
}

export class Skills extends ContentfulClient {
  public async get() {
    return await this.getEntries<{
      title: string;
      years: number;
      description: string;
      web: boolean;
    }>({
      content_type: "skills",
      limit: 1000,
    }).then(({ items }) => items.map(({ fields }) => fields));
  }
}

export class Histories extends ContentfulClient {
  public async get() {
    return await this.getEntries<{
      title: string;
      start: string;
      end: string;
      companyDescription: string;
      description: string;
      badges: string[];
    }>({
      content_type: "history",
      limit: 1000,
    }).then(({ items }) => items.map(({ fields }) => fields));
  }
}

export class Artifacts extends ContentfulClient {
  public async get() {
    return await this.getEntries<{
      title: string;
      link: string;
      description: string;
      image: string;
      orderScore: number;
    }>({
      content_type: "artifact",
      limit: 1000,
    }).then(({ items }) => items.map(({ fields }) => fields));
  }
}
