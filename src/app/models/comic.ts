import {Url} from "./url";
import {Thumbnail} from "./thumbnail";
import {Collection} from "./collection";

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  format: string;
  pageCount: number;
  textObjects: Array<{ type: string; language: string; text: string; }>;
  resourceURI: string;
  urls: Array<Url>;
  prices: Array<{ type: string; price: number }>;
  thumbnail: Thumbnail;
  creators: Collection;
  characters: Collection;
  stories: Collection;
  events: Collection;

}
