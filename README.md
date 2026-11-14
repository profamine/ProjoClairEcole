# ProjoClair École

Site vitrine : maintenance et lampes de vidéoprojecteurs Epson pour les écoles de Marrakech.
En ligne : https://www.projoclairecole.online/ — version arabe : https://www.projoclairecole.online/ar/

| Fichier | Rôle |
|---|---|
| `index.html` | La page (français / arabe, mobile d'abord). Le formulaire ouvre WhatsApp avec la demande déjà rédigée. |
| `autocollant.html` | Planche A4 de 12 étiquettes « Entretien : scannez-moi » avec QR code, à imprimer. |
| `og-image.png` | Image d'aperçu quand le lien est partagé sur WhatsApp ou Facebook. |
| `favicon.svg`, `apple-touch-icon.png` | Icônes de l'onglet et de l'écran d'accueil du téléphone. |
| `ar/index.html` | Version arabe (adresse `/ar/`), **générée** : ne pas la modifier à la main. |
| `tools/build-ar.mjs` | Génère `ar/index.html` à partir de `index.html` (titre, description et adresse en arabe). |
| `robots.txt`, `sitemap.xml` | Pour Google (les deux langues, avec `hreflang`). |

## Modifier les prix, le numéro, les références

En haut du `<script>` de `index.html`, bloc `CONFIG` : prix d'appel, garantie, remises du contrat, écoles clientes, témoignages.
Pour afficher le prix d'une lampe, remplacer `price: null` par le montant en DH dans le tableau `LAMPS`.

Après toute modification de `index.html`, régénérer la version arabe puis pousser :

```bash
node tools/build-ar.mjs
```

Si vous changez un prix dans `CONFIG`, changez-le aussi dans le bloc `application/ld+json` en haut de la page (données lues par Google).

Chaque `git push` sur `main` redéploie automatiquement le site sur Vercel.

Si l'adresse du site change, remplacer `projoclairecole.online` dans `index.html`, `robots.txt`, `sitemap.xml` et `autocollant.html`.
