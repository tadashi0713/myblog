// / <reference types="node" />

declare module "*.scss";

declare namespace NodeJS {
  export interface ProcessEnv {
    SITE_RECAPTCHA_KEY: string;
  }
}
