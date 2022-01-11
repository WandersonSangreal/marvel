import {Thumbnail} from "./thumbnail";
import {Collection} from "./collection";
import {Url} from "./url";

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Collection;
  series: Collection;
  stories: Collection;
  events: Collection;
  urls: Array<Url>;
}
