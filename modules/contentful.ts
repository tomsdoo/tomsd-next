import {
  createClient,
  ContentfulClientApi,
  EntryCollection,
  EntrySkeletonType,
} from "contentful";

export class ContentfulClient {
  protected client: ContentfulClientApi<undefined>;
  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      environment: "master",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }

  public async getEntries(
    query?: any
  ): Promise<EntryCollection<EntrySkeletonType>> {
    return await this.client.getEntries<EntrySkeletonType, string>(query);
  }

  public async getEntryItems<T = unknown>(query?: any): Promise<T[]> {
    return await this.getEntries(query).then(({ items }) =>
      items.map((item) => item.fields as T)
    );
  }
}

export class Profile extends ContentfulClient {
  public async get(): Promise<object> {
    const items = await this.getEntryItems<{ json: object }>({
      content_type: "anydoc",
      "fields.name": "tomsd-page-profile",
    });
    return items?.[0]?.json ?? {};
  }
}

export class Skills extends ContentfulClient {
  public async get(): Promise<
    Array<{ title: string; years: number; description: string; web: boolean }>
  > {
    return await this.getEntryItems<{
      title: string;
      years: number;
      description: string;
      web: boolean;
    }>({
      content_type: "skills",
      limit: 1000,
    });
  }
}

export class Histories extends ContentfulClient {
  public async get(): Promise<
    Array<{
      title: string;
      start: string;
      end: string;
      companyDescription: string;
      description: string;
      badges: string[];
    }>
  > {
    return await this.getEntryItems<{
      title: string;
      start: string;
      end: string;
      companyDescription: string;
      description: string;
      badges: string[];
    }>({
      content_type: "history",
      limit: 1000,
    });
  }
}

export class Artifacts extends ContentfulClient {
  public async get(): Promise<
    Array<{
      title: string;
      link: string;
      description: string;
      image: string;
      orderScore: number;
    }>
  > {
    return await this.getEntryItems<{
      title: string;
      link: string;
      description: string;
      image: string;
      orderScore: number;
    }>({
      content_type: "artifact",
      limit: 1000,
    });
  }
}

export class Stories extends ContentfulClient {
  public async get(): Promise<
    Array<{
      title: string;
      description: string;
      issue: string;
      solution: string;
      badges: string[];
    }>
  > {
    return await this.getEntryItems<{
      title: string;
      description: string;
      issue: string;
      solution: string;
      badges: string[];
    }>({
      content_type: "story",
      limit: 1000,
    });
  }
}
