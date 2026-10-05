# Aayakalai website

Deploy this directory as the Netlify publish directory. No build step is needed.

## Regional pages

- `/us/` contains the original site content.
- `/india/` contains the same content without Student Showcase or the pricing section. The WhatsApp contact and booking section is included.
- `/india/ta/` is the Tamil version, including Tamil navigation, booking instructions, WhatsApp message, and accessibility labels. The India pages have an English / தமிழ் switch; English is the default. Both languages use static HTML and work without JavaScript.
- `_redirects` sends homepage visitors in India to `/india/`, and US visitors to `/us/`. Other countries and unknown locations default to `/us/`.
- The US / India switch below the logo links directly to either version and saves an `nf_country` cookie for one year, overriding automatic country selection on future homepage visits.

Edit `us/index.html`, `india/index.html`, and `india/ta/index.html` for regional content. Keep the English and Tamil India pages in sync when content changes. Keep the root `index.html` in sync with the US page as a fallback for hosting without Netlify routing. Both versions share the root CSS, JavaScript, and profile image.

For a local preview, run `python3 -m http.server 8000` and open `/us/` or `/india/`. Country redirects run on Netlify, not on this local server. After deployment, verify homepage routing using US and India connections with the `nf_country` cookie cleared, then verify a manual choice persists on a return to `/`.

## Performance and accessibility

The pages show content immediately and work without JavaScript. JavaScript adds the mobile menu, region preference, active navigation, and clipboard feedback. The menu supports keyboard navigation and Escape, and the site respects reduced motion preferences. A skip link and main landmark allow quick access to content.

The pages use the optimized `karthick-profile.webp` with `karthick-profile.jpg` as a fallback and explicit dimensions. Images and video embeds load lazily. Both versions share the same improvements.
