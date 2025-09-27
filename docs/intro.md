---
sidebar_position: 1
---

# Kom i gang

Velkommen til **dylgja.no** - dokumentasjons- og innhaldsplattforma.

## Kva du finn her

Dette er ein dokumentasjonsside bygd med Docusaurus som støtter markdown-filer.

### Funksjonar

- Markdown-støtte for enkelt redigering av innhald
- Automatisk navigasjon og søk
- Mørk/lys modus
- Responsiv design
- Bloggfunksjonalitet

## Korleis du redigerer innhald

Alle dokumentasjonsfiler ligg i `docs/`-mappa og er skrivne i Markdown-format.

For å leggje til nytt innhald:

1. Opprett ei ny `.md`-fil i `docs/`-mappa
2. Legg til metadata øvst i fila:
   ```yaml
   ---
   sidebar_position: 2
   title: Min nye side
   ---
   ```
3. Skriv innhaldet ditt i Markdown

## Starte utviklingsserveren

```bash
npm run start
```

Dette startar ein lokal server på http://localhost:3000/ der du kan sjå endringane dine live.

## Byggje sida for produksjon

```bash
npm run build
```

Dette genererer statiske filer i `build/`-mappa som kan publiserast på ein web-server.
