# Copilot Instructions for proof-of-existence

## Repository Overview

This repository is a **static archival and proof-of-existence repository** for the **Theory of Fundamental Belief (TFB)** / **Teoria da Crença Fundamental (TCF)**, authored by **Christian Montgomery** (ORCID: 0009-0009-5364-249X).

Its purpose is to serve as a permanent, publicly accessible record of intellectual authorship, priority, and academic identity — not as a software project.

## Repository Structure

```
.
├── README.md                         # Main documentation (English)
├── PUBLIC_STATEMENT.md               # Bilingual authorship declaration
├── index.html                        # GitHub Pages landing page (English, with JSON-LD metadata)
├── index-pt.html                     # GitHub Pages landing page (Portuguese)
├── TFB_Conceptual_Framework_v1.3.pdf # Theoretical framework document
└── audio-calibration.md              # Audio system documentation
```

## Content Types

- **Markdown (`.md`)**: Documentation and statements. Follow standard GitHub Markdown conventions.
- **HTML (`.html`)**: Static pages hosted on GitHub Pages. Each page contains JSON-LD structured metadata (`application/ld+json`) for academic indexing. Preserve existing metadata schema (Schema.org, Wikidata, DOI, ORCID identifiers).
- **PDF**: Binary archival documents. Do not modify PDFs programmatically.

## Key Identifiers (do not alter)

- **Wikidata entity**: `Q137856487` — https://www.wikidata.org/wiki/Q137856487
- **DOI (Zenodo)**: `10.5281/zenodo.17991356` — https://doi.org/10.5281/zenodo.17991356
- **ORCID**: `0009-0009-5364-249X` — https://orcid.org/0009-0009-5364-249X
- **GitHub Pages URL**: https://christianmontgomery220-svg.github.io/proof-of-existence/

## Conventions

- Maintain bilingual support: English (TFB) and Portuguese (TCF) versions should stay in sync when updating shared content.
- JSON-LD metadata in HTML files must remain valid and consistent with the Schema.org vocabulary.
- Do not remove or alter authorship attribution, official identifiers, or license information.
- Keep content factual and neutral — this repository is an academic archival record, not a promotional site.

## What Copilot Should Help With

- Updating or improving documentation in Markdown files
- Fixing broken links or outdated references
- Improving HTML accessibility or metadata completeness
- Keeping bilingual versions (`index.html` / `index-pt.html`) consistent
- Adding new structured metadata fields when academically appropriate
- Creating GitHub Actions workflows for validation (e.g., HTML/JSON-LD linting)

## What Copilot Should NOT Do

- Modify or remove official identifiers (DOI, Wikidata, ORCID)
- Change authorship attribution
- Alter or delete the PDF document
- Introduce any software dependencies or build systems unless explicitly requested
- Make changes that could affect the canonical URLs used for academic indexing
