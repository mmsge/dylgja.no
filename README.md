# dylgja.no

Dokumentasjons- og innhaldsplattform bygd med Docusaurus.

## 🚀 Kom i gang

### Installere avhengigheiter

```bash
npm install
```

### Starte utviklingsserver

```bash
npm run start
```

Dette startar ein lokal utviklingsserver på `http://localhost:3000/`. Sida oppdaterer seg automatisk når du gjer endringar.

### Byggje for produksjon

```bash
npm run build
```

Dette genererer statiske filer i `build/`-mappa som kan publiserast på kva som helst web-server.

### Servere lokalt

```bash
npm run serve
```

Serverer det bygde nettstedet lokalt for testing.

## 📝 Redigere innhald

### Dokumentasjon

Alle dokumentasjonsfiler ligg i `docs/`-mappa og er skrivne i Markdown-format.

For å leggje til ny dokumentasjon:

1. Opprett ei ny `.md`-fil i `docs/`-mappa
2. Legg til metadata øvst i fila:
   ```yaml
   ---
   sidebar_position: 2
   title: Tittelen på sida
   ---
   ```
3. Skriv innhaldet ditt i Markdown

### Blogginnlegg

Blogginnlegg ligg i `blog/`-mappa. Navngi filene med dato først: `YYYY-MM-DD-tittel.md`.

### Tilpasse designet

CSS-tilpassingar kan gjerast i `src/css/custom.css`.

## 🛠️ Teknologi

- **Docusaurus** - Dokumentasjonsrammererk
- **React** - UI-bibliotek
- **Markdown** - Innhaldsformat
- **Node.js** - Runtime-miljø

## 📚 Dokumentasjon

Sjå [Docusaurus-dokumentasjonen](https://docusaurus.io/) for meir informasjon om korleis du tilpassar og utvider nettstedet.
