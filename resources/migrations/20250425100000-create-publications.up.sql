CREATE TABLE articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  keyword TEXT,
  publication_name TEXT,
  cover_date TEXT,
  creator TEXT,
  doi TEXT UNIQUE
);
