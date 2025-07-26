declare namespace NodeJS {
  interface ProcessEnv {
    readonly CONTENTFUL_SPACE_ID: string;
    readonly CONTENTFUL_ACCESS_TOKEN: string;
  }
}
