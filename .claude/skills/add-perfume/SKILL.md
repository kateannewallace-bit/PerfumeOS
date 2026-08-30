---
name: add-perfume
description: Add new perfumes (or fix existing ones) in the PerfumeOS collection — research notes on Fragrantica/Parfumo, edit perfume-data.js safely, set genre and let chart category work automatically, give Katie a taste-prediction "take" grounded in her rating history, verify live, then commit. Use whenever Katie asks to add a perfume, add multiple perfumes, correct an existing perfume's data, or says something like "add these, grab the note pyramids, and give me your take."
---

# Add a perfume to PerfumeOS

This is Katie's personal perfume-collection static site: `index.html` (main
app), `kate.html` ("By Genre" page), `trevor.html` (masculine-filtered view),
all reading from `perfume-data.js`. No build step. Git repo pushing to
`origin/main` on GitHub, deployed via GitHub Pages.

## The one hard rule: never touch Supabase, only the local file

Supabase holds **live, synced user state** — ratings, `wearLog`, `wishlist`,
`perfumeEdits`, and perfumes added by Katie directly through the app's own
"add perfume" UI (those land in a separate `userPerfumes` array that lives
*only* in Supabase/localStorage, not in `perfume-data.js`, until someone
manually consolidates them in). This skill never has, and never should have,
any direct access to that live data — everything here is a static edit to
`perfume-data.js` in the repo.

Practical consequence: **`perfume-data.js`'s own max `i` is not guaranteed to
be the true max ID in the whole system.** If Katie has added anything through
the live app recently, it may already be sitting in Supabase's `userPerfumes`
with an ID this file doesn't know about. When picking new IDs, go safely
above the current file max (see below) and if there's any doubt, ask Katie
whether she's added anything through the app UI that isn't in this file yet
— don't just assume the file's max is authoritative.

## Step 1 — Research every perfume before touching the file

For each perfume, WebSearch Fragrantica and Parfumo specifically for:
- The full note pyramid (top/middle/base if the brand publishes one; a flat
  list is fine when they don't, e.g. many niche/indie releases).
- Official gender classification (feminine / masculine / unisex).
- Enough character/review language to sanity-check genre placement later.

**Watch for flanker confusion.** A name that looks like "the same perfume in
a different concentration" can be a completely different composition — e.g.
Chanel No. 5 EDT vs. No. 5 L'Eau are different fragrances by different
perfumers with different pyramids, not the same juice at different strength.
Confirm the *exact* product name and year against what you're about to write
down. If the name Katie gives you is ambiguous, search for it as written
before assuming which variant she means.

## Step 1.5 — Give Katie a "take" (when asked, or by default)

When Katie asks to add perfumes she'll often phrase it as "add these, grab
the note pyramids, and give me your take" — that's a standing request for a
taste prediction, not just a data entry. Default to giving one even if she
doesn't say the word "take," since it's cheap once you've already pulled the
note pyramid.

**Ground it in her actual rating history, not vibes.** She has 1000+ items
in `perfume-data.js` with real signal: `r` (rating), `pr` (preference —
Love/Like/Neutral/Dislike/Avoid), `t` (tried), and — most valuable — `mn`
(her own written reactions, e.g. *"Hate this, might sell it... Trevor made
me scrub it"* or *"Peachy, fresh, green... not boring, but also not
tremendously captivating. 6.5/10"*). That's real, specific evidence of what
she likes and why, and is much stronger than reasoning from note lists alone.

Process:
1. For each note in the new perfume's pyramid (especially top/heart notes,
   or whatever the reviews call defining), search `perfume-data.js` for
   existing items sharing that note, filtered to ones with a rating, a
   non-"Unrated" `pr`, or non-empty `mn` — untried/unrated items aren't
   useful comparables.
2. Pull 2–4 of the closest comparables on each side: things she's loved or
   rated highly that share notes with the new perfume, and things she's
   disliked/avoided/scrubbed that share notes with it. Quote her own `mn`
   text where there is one — it's more convincing than a paraphrase.
3. Also check her custom tags (`ct`) for patterns relevant to the new
   perfume's character — e.g. she's flagged things "old lady" or "smells
   cheap" before, and family/character overlap with those is worth a
   mention.
4. Synthesize a plain-language lean — "likely a love," "probably a
   love-hate split like X," "closer to the things you've scrubbed" — tied to
   *specific* overlapping or conflicting notes, not a fabricated numeric
   score. Be honest that this is directional: note lists are a weak signal
   for how something actually wears (drydown, projection, and execution
   quality matter as much as the ingredient list), so frame it as a lean
   she can weigh, not a verdict.

## Step 2 — Never hand-edit the file with sed/regex

`perfume-data.js` is the entire `perfumes` array as **one line** of minified
JSON assigned to `window.PERFUME_RAW_DATA`. Structural edits (adding,
removing, or renaming a record) must go through Python's `json` module, never
sed/regex — regex on adjacent minified JSON objects is how you silently
corrupt a neighbor's field.

```python
import json

with open('perfume-data.js', encoding='utf-8') as f:
    content = f.read()

start = content.index('=') + 1
json_str = content[start:].strip()
suffix = ''
if json_str.endswith(';'):
    json_str = json_str[:-1]
    suffix = ';'
data = json.loads(json_str)

# ... mutate data['perfumes'] here: append new records, or find-and-edit
# an existing one by its 'i' ...

full_new = json.dumps(data, ensure_ascii=False, separators=(',', ':'))
with open('perfume-data.js', 'w', encoding='utf-8') as f:
    f.write(content[:start] + ' ' + full_new + suffix)
```

Note the `' ' + full_new`: `content[:start]` ends right after the `=`, so you
must add back the space to keep `window.PERFUME_RAW_DATA = {...}` instead of
`={...}`.

**Always validate immediately after writing:**
```python
# re-parse the file you just wrote
# - total perfume count changed by exactly the number you added/removed
# - all 'i' values still unique
# - top-level keys unchanged: perfumes, wearLog, wishlist, allTags
# - wearLog/wishlist length unchanged (you should never touch these)
```

Then `git diff --stat perfume-data.js`. Because the array is one line, a
clean edit shows as a tiny diff (often "1 file changed, 1 insertion(+), 1
deletion(-)" for that one line). If the diff looks bigger than that, the
rewrite reformatted something it shouldn't have — investigate before
committing, don't push it.

## Step 3 — New record field schema

Match the schema real user-added entries already use (grep a few recent
`"userAdded":true` records to confirm current convention before writing new
ones — house-name casing/spelling especially varies by precedent, e.g. this
collection uses lowercase `"les indemodables"` and `"Frederic Malle"` not
`"Editions de Parfums Frédéric Malle"`; check, don't assume).

| Field | Meaning | New-add convention |
|---|---|---|
| `i` | unique numeric id | current max `i` in the file + 1, sequential across a batch (see the ID-safety note above) |
| `h` | house | match existing spelling/casing precedent for that house if any entries exist |
| `n` | name | exact product name; if it's a distinct flanker, the distinguishing word belongs in the name (e.g. "L'Eau") |
| `c` | concentration | only when the house/name already has multiple concentration variants in the collection, e.g. `"EDT"` |
| `f` | family | short lowercase comma list, e.g. `"floral, woody, musk"` — mirror Fragrantica's own accord classification where given |
| `no` | notes | semicolon-separated flat list, no "Top:/Middle:/Base:" labels, material names naturally capitalized |
| `tg` | tags | lowercase array: family tokens first, then each `no` phrase lowercased as one tag (don't split multi-word notes into separate words) |
| `pm` | primary/standout notes | **omit entirely**, matching how the live app's own "add perfume" form leaves it unset — only set it with a specific, defensible reason |
| `r` | rating | `null` |
| `t` | tried | `false` |
| `pr` / `st` | preference / status | `"Unrated"` |
| `m` | mood | `"Air"` / `"Resin"` / `"Bridge"` / `"Classic"` — see formula below |
| `g` | gender | `"feminine"` / `"masculine"` / `"unisex"` per Fragrantica |
| `userAdded` | — | always `true` |

**Mood formula** (replicates `index.html`'s `scoreNewPerfume`, so hand-added
records look like ones the app itself would have produced — text is `no`
lowercased + `f` lowercased, `has(...)` = substring match):

```
airHits = count of:
  has(' tea','lapsang')
  has('grapefruit','pomelo','bergamot','citrus')
  has('peach','osmanthus')
  has('herbal','mint')
  has('musk') && !has('amber','incense')

resHits = count of:
  has('resin','incense','frankincense','myrrh')
  has('amber','labdanum')
  has('vanilla') && !has('marshmallow')
  has('smoke','smoky')

mood = 'Air'    if airHits >= 2 and resHits <= 1
     = 'Resin'  if resHits >= 2 and airHits <= 1
     = 'Bridge' if airHits >= 1 and resHits >= 1
     = 'Classic' otherwise
```

## Step 4 — Chart category (index.html): fully automatic, don't touch it

`index.html`'s "Chart category" is computed live by `dominantCategory()`
against `CATEGORY_MAP`, reading tags built from `no`/`f`/`n` at render time.
**No field stores it** — never try to set or guess it by hand. After adding
records, verify what it resolves to by loading `index.html` live and running:

```js
const raw = window.RAW_DATA.perfumes.find(p => p.i === <new id>);
const norm = normalizePerfume(raw);
dominantCategory(norm);
```

Don't hand-trace the scoring — it has real gotchas (e.g. a note phrase like
"Mandarin orange" scores as *two* separate keyword hits, mandarin **and**
orange, in `CATEGORY_MAP`'s `Citrus` bucket). Just run it and read the
result.

## Step 5 — Genre ("By Genre" / kate.html): verify live, override if wrong

`kate.html`'s `categorize()` checks `RECATEGORIZE[keyOf(p)]` first
(`keyOf = house + " — " + name`, exact string match) before falling back to
auto-scoring against `CATEGORIES` keyword weights (falls to the
"Dry Woods & Vetiver" catch-all if the best score is under 5).

1. After adding records, reload `kate.html` live and confirm each new
   item's actual placement by searching the rendered page for its name —
   don't assume the auto-score landed where the reviews say it should.
2. If the auto-score result contradicts what Fragrantica/Parfumo/reviewers
   actually describe as the defining character — the classic failure mode
   all season: several moderate-weight keywords summing past the one note
   that's genuinely dominant — add an explicit override:
   ```js
   "House — Exact Name": "Category Name",
   ```
   placed in `kate.html`'s `RECATEGORIZE` object, with a commit message
   explaining *why* (what the auto-score got wrong, what the reviews
   actually say).
3. **Always** run the duplicate-key check after any `RECATEGORIZE` edit —
   a later duplicate silently wins over an earlier one with no error:
   ```bash
   awk '/^const RECATEGORIZE = \{/,/^\};/' kate.html \
     | grep -oP '^\s*"\K[^"]+(?="\s*:)' | sort | uniq -d
   ```
   Must return nothing.
4. If you're **correcting** an existing perfume's name (not adding new),
   remember `keyOf` is built from house+name — check whether a
   `RECATEGORIZE` entry already exists under the *old* name and update its
   key too, or the override will silently stop matching.

## Step 6 — Verify, then commit

Before committing, in the browser:
- `kate.html`: total item count increased by exactly the number of perfumes
  added (or unchanged, for a pure correction); each new/changed name search
  lands in the expected category.
- `index.html`: `read_console_messages(onlyErrors:true)` comes back clean;
  spot-check `dominantCategory()` output per Step 4.
- `git status` / `git diff --stat`: only `perfume-data.js` (always) and
  `kate.html` (only if a `RECATEGORIZE` entry was added/edited) should be
  touched. Never touch `index.html`'s `CATEGORY_MAP`/`dominantCategory` or
  `kate.html`'s `CATEGORIES` array for a routine add — that's structural and
  should be a separate, explicit conversation with Katie if a genuinely new
  category is warranted.

Commit message should say *why* any genre override was needed, not just
what changed — matches this project's established commit style. Push only
after Katie has actually asked for the addition/fix (which a request like
"add these perfumes" already implies).
