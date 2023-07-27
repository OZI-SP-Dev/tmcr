import { spfi, SPBrowser } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

declare var _spPageContextInfo: any;

const webUrl = _spPageContextInfo.webAbsoluteUrl;
const sp = spfi().using(SPBrowser({ baseUrl: webUrl }));

export const trackDocument = async (Title: string) => {
  if (process.env.NODE_ENV !== "development") {
    try {
      await sp.web.lists.getByTitle("DocumentTracker").items.add({ Title });
    } catch (error) {
      console.error(error);
    }
  }
};
