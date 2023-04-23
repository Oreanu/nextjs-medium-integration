export interface SingleArticleData {
  title: string;
  link: string;
  author: string;
  published: number;
  created: number;
  category: string[];
  content: string;
  enclosures: any[];
  content_encoded: string;
  media: Media;
}

export interface Media {}
