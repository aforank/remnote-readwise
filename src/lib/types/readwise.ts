export interface Highlight {
  id: number;
  text: string;
  location: number;
  location_type: string;
  note?: string;
  color: string;
  highlighted_at: Date;
  created_at: Date;
  updated_at: Date;
  external_id: string;
  end_location?: any;
  url?: string;
  book_id: number;
  tags: { id: number; name: string }[];
  is_favorite: boolean;
  is_discard: boolean;
  readwise_url: string;
}

export interface ReadwiseBook {
  user_book_id: number;
  title: string;
  author: string;
  readable_title: string;
  source: string;
  cover_image_url: string;
  unique_url: string;
  book_tags: { id: number; name: string }[];
  category: string;
  readwise_url: string;
  source_url: string;
  asin?: any;
  highlights: Highlight[];
  document_note: string;
  summary: string;
}

export interface ReadwiseHighlightExport {
  count: number;
  nextPageCursor?: any;
  results: ReadwiseBook[];
}
