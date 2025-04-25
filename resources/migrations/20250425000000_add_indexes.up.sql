CREATE INDEX IF NOT EXISTS idx_publications_keyword ON publications(keyword);
CREATE INDEX IF NOT EXISTS idx_publications_doi ON publications(doi);
CREATE INDEX IF NOT EXISTS idx_publications_pubname ON publications(publication_name);
CREATE INDEX IF NOT EXISTS idx_publications_cover_date ON publications(cover_date);
CREATE INDEX IF NOT EXISTS idx_publications_creator ON publications(creator);
