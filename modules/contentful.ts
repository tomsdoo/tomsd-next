import { createClient, ContentfulClientApi } from "contentful";

export class ContentfulClient {
  protected client: ContentfulClientApi;
  constructor(){
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      environment: "master",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });
  }
  public async getEntries<T = unknown>(query?: any){
    return await this.client.getEntries<T>(query);
  }
}

export class Profile extends ContentfulClient {
  public async get(){
    return await this.getEntries<{ json: object; }>({
      content_type: "anydoc",
      "fields.name": "tomsd-page-profile"
    }).then(({ items }) => items?.[0]?.fields?.json);
  }
}
