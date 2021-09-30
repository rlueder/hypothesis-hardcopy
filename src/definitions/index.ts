/**
 * @name Annotation
 * @type {Object}
 */

export type Annotation = {
  id: string;
  created: string;
  updated: string;
  user: string;
  uri: string;
  text: string;
  tags: Array<string>;
  group: string;
  permissions: {
    read: Array<string>;
    admin: Array<string>;
    update: Array<string>;
    delete: Array<string>;
  };
  target: [
    {
      source: string;
    }
  ];
  document: Object;
  links: {
    html: string;
    incontext: string;
    json: string;
  };
  user_info: {
    display_name: string;
  };
  flagged: boolean;
  hidden: boolean;
};

/**
 * @name BookInfo
 * @type {Object}
 */

export type BookInfo = {
  authors: Array<Object>;
  description: string;
  imageLinks: {
    smallThumbnail: string;
  };
  industryIdentifiers: [
    {
      identifier: string;
      type: string;
    }
  ];
  pageCount: number;
  publishedDate: string;
  publisher: string;
  title: string;
};

/**
 * FormErrors
 */

export type FormErrors = {
  isbn?: string;
};
