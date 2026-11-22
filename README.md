# makefun-news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/ozisaputra130300-create/makefun-news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/ozisaputra130300-create/makefun-news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One 1024×1024 image summing up Sunday 22 November 2026 in five labelled panels: the IRGC's claimed strikes on US Patriot radars in Bahrain (hero), COP31 entering a second day of overtime, the capture of FBI top-10 fugitive "Chapo Isidro" in Sinaloa, the AI sell-off hitting US and Japanese markets, and the EU–Indonesia trade deal signed after ten years of talks. The image is drawn from scratch with a Python/PIL program (`render.py` in the dev folder is the build script; the shipped `entry.png` is its deterministic output) and copied to `/output` by `main.ts`, which gates it on PNG magic bytes, a 1 MiB size cap, and exact 1024×1024 dimensions.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=sy0tw1m4&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
