export interface Collection {
  available: number;
  collectionURI: string;
  items: Array<{ resourceURI: string; name: string }>;
  returned: number;
}
