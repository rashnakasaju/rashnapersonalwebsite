# Rashna Kasaju / Personal Website

A bespoke editorial personal site for **Rashna Kasaju**. Content creator, digital marketer, and marketing student at Stony Brook University. Design inspired by [leonidkostetskyi.com](https://leonidkostetskyi.com/).

**Live at [rashnakasaju.vercel.app](https://rashnakasaju.vercel.app).**

## Highlights

- **Editorial hero**: giant name top-left, italic tagline bottom-right, rotating star accent.
- **Snappy 0 to 100 loader** (under 1 second) with refined serif counter.
- **Light theme by default** with a cinematic wipe transition when toggling to dark.
- **Top Posts** section featuring her three viral Instagram reels with 973.3K, 769.2K, and 753.5K likes and links back to the original posts.
- **Creative cursor** (dot + lagging ring, mix-blend-difference) with no enlargement on hover, keeping things clean.
- **Hover-preview project list** with smaller, rotated cards that follow the cursor.
- **Single-row tools** section showing Premiere + CapCut, Lightroom, Canva + Figma, Analytics + Ads.
- **Editorial timeline** for experience with hover shift and no bullet dashes.
- **Contact page** modeled on the reference site. Huge &ldquo;Get in Touch&rdquo; text, three rotated business cards, and a dark band with social buttons, contacts, other pages, and a mailto &ldquo;Send an email&rdquo; button. No web form.
- **No em dashes**, ever. Uses middle dots and slashes instead.
- **Responsive**, zero-build, zero-dependency.

## Pages

```
RKPersonalWeb/
├── index.html          Home (editorial hero, top posts, selected work, tools)
├── about.html          Bio, quote, experience timeline, languages marquee
├── projects.html       Project gallery (6) with hover preview + 4 case studies
├── contact.html        GET IN TOUCH hero + floating cards + contact band
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/posts/      Drop post screenshots here (see its README)
└── README.md
```

### Content separation (no repeats)

| Page         | Focus                                                             |
|--------------|-------------------------------------------------------------------|
| Home         | Hero (Spline 3D), Top Posts, 3 featured projects, Tools           |
| About        | Personal story, philosophy, education, by-the-numbers, timeline   |
| Projects     | Creative work gallery + 4 case studies (no job-title rehash)      |
| Contact      | Direct lines and social links                                     |

## Featured Instagram posts

The three top posts on the home page link to these reels and show their like counts:

1. [@inspire.zodiacs reel (973.3K likes)](https://www.instagram.com/p/DGL8o0_yNhL/)
2. [@inspire.zodiacs reel (769.2K likes)](https://www.instagram.com/p/DJh5BwjSmmd/)
3. [@inspire.zodiacs reel (753.5K likes)](https://www.instagram.com/p/DFdavKUyBHS/)

Instagram blocks direct image scraping, so drop a screenshot of each post cover into `assets/img/posts/` as `post-1.jpg`, `post-2.jpg`, `post-3.jpg`. Until then the cards show a soft branded gradient so they always look intentional.

## Run Locally

```powershell
cd c:\RKPersonalWeb
python -m http.server 5500
# open http://localhost:5500
```

Or just open `index.html` directly. No build step, no dependencies.

## Customizing

- **Theme colors**: `:root` (light, default) and `body.dark` in `assets/css/styles.css`.
- **Default theme**: light. Swap by adding `class="dark"` to `<body>` or via the toggle.
- **Theme transition**: the `themeWipe` keyframes drive the cinematic curtain.
- **Loader speed**: tweak the step and timeout in `main.js` inside `tick()`.
- **Fonts**: swap the Google Fonts `<link>` on each page.

## Contact

- Instagram [@inspire.zodiacs](https://www.instagram.com/inspire.zodiacs/) (129K+ followers, 92.8M+ views)
- TikTok [@rashberryplays](https://www.tiktok.com/@rashberryplays) (16K+ followers, 3.9M likes)
- LinkedIn [rashna-kasaju](https://linkedin.com/in/rashna-kasaju/)
- Email rashnakasaju@gmail.com

&copy; 2026 Rashna Kasaju. All rights reserved.
