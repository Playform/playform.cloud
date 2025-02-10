#!/usr/bin/env bash

find_documents() {
	\find src/content/en ! -iname "~*" -iname "*.docx" 2>/dev/null
}

for document in $(find_documents); do
	pandoc "$document" -o "${document%.docx}".md \
		--columns=80 \
		--eol=lf \
		--from=docx+empty_paragraphs \
		--reference-links \
		--reference-location=block \
		--standalone \
		--strip-comments \
		--to=markdown-pandoc_title_block-yaml_metadata_block-smart-grid_tables-bracketed_spans \
		--markdown-headings=setext \
		--toc \
		--wrap=none
done
