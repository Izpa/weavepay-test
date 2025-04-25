CREATE INDEX IF NOT EXISTS idx_articles_doi ON articles(doi);
--;;
CREATE INDEX IF NOT EXISTS idx_articles_pubname ON articles(publication_name);
--;;
CREATE INDEX IF NOT EXISTS idx_articles_cover_date ON articles(cover_date);
--;;
CREATE INDEX IF NOT EXISTS idx_articles_creator ON articles(creator);
