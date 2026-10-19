/* One-time diary cleanup, 2026-10-19. Applied from Settings → "Clean up duplicate diary entries".
   Each entry is a fingerprint: [date, house, perfume, notes, rating, concentration, safeReaction].
   deletes: duplicate wears (re-imported free-text copies, double saves) to remove.
   keep: how many identical copies of a deleted fingerprint must survive (never delete below this).
   patches: the kept copy of a wear, with the details Katie chose to merge onto it. */
window.DIARY_CLEANUP_2026_10 = {
 "deletes": [
  "[\"2026-01-31\",\"Diptyque\",\"Orphéon\",\"No notes needed. Understated cedar and jasmine — so elegant and soft.\",10,\"\",\"\"]",
  "[\"2026-03-13\",\"Lolita Lempicka\",\"Lolita Lempicka L'Original\",\"a favorite\",10,\"\",\"\"]",
  "[\"2026-04-20\",\"Diptyque\",\"Volutes edp\",\"Volutes is like an incense licorice- really pretty and softens later. Love this, so resinous.\",9,\"\",\"Didn't smell it\"]",
  "[\"2026-04-20\",\"Diptyque\",\"Volutes edp\",\"Amazing, incredible — anise and rich resinousness. Loved this.\",10,\"\",\"\"]",
  "[\"2026-04-22\",\"Diptyque\",\"Eau Rose EDT\",\"Like fresh rose, a little Little Flower. Really good.\",9,\"\",\"\"]",
  "[\"2026-06-16\",\"Diptyque\",\"Orphéon\",\"\",10,\"EDP\",\"\"]",
  "[\"2026-06-16\",\"Diptyque\",\"Orphéon\",\"\",10,\"EDP\",\"\"]",
  "[\"2026-06-16\",\"Diptyque\",\"Orphéon\",\"\",10,\"EDT\",\"\"]",
  "[\"2026-06-16\",\"Diptyque\",\"Fleur de Peau\",\"\",10,\"EDP\",\"\"]",
  "[\"2025-11-14\",\"\",\"Penhaligon's The Favourite\",\"Bubble bath and violet, really lovely drydown.\",9,\"\",\"\"]",
  "[\"2025-11-15\",\"\",\"Penhaligon's The Bewitching Yasmine\",\"Crazy coffee and pastry opening, very oud middle, really nice eastern incense drydown. A tolerable vanilla note — was very surprised when I first sprayed in a good way.\",8,\"\",\"\"]",
  "[\"2025-11-16\",\"\",\"Penhaligon's Luna\",\"Floral pine forest, citrus zest, not at all sweet, just fresh. Pine goes away after opening and then it's just very floral. Super short lived, really lovely.\",8,\"\",\"\"]",
  "[\"2025-11-17\",\"\",\"Penhaligon's Empressa\",\"Big fruity opening, like melon and peach in a fruit salad in a department store. A little creamy vanilla but not cloying (actually maybe a bit cloying). Getting a caramel note as it dries — this might be the most gourmand one they make. Getting a lot more rose and patchouli as it dries. By the end of the day it's really mellow and almost chocolate-y after about 5–6 hours, then it's gone. But wow it is LOUD at first.\",5,\"\",\"\"]",
  "[\"2025-11-18\",\"\",\"Penhaligon's Duchess Rose\",\"Super light, literal rose water or candied rose, but also a bit of skin scent at opening (Ambroxan?). Very very light and inoffensive — I did several sprays. Really pleasant and safe.\",7,\"\",\"\"]",
  "[\"2025-11-19\",\"\",\"Penhaligon's Changing Constance\",\"Caramel and vanilla, not too sweet or cloying. Tobacco in the background of the opening — maybe a unisex vanilla. I liked this but it was the same all day and didn't last long. I'd wear it again.\",7,\"\",\"\"]",
  "[\"2025-11-20\",\"\",\"Penhaligon's Halfeti\",\"Sprayed from far away since we didn't like this in store. Opens spicy, woody and incense-y. Oud in the middle — smells a bit like band aids. Not bad but very middle eastern and not at all floral, just warm spice. Very unisex. Drydown is dusty vanilla, pipe smoke, spices (cardamom?), mild headache a few hours in. Update: stuck around on my jacket for a few days and is such a warm, creamy, comforting smell — maybe this is 7/10 and needs another wear.\",4,\"\",\"\"]",
  "[\"2025-11-21\",\"\",\"Penhaligon's Highgrove Bouquet\",\"Floral with the same bubble bath note as Diptyque Violette or The Favourite — is it mimosa? Sweet floral with some photorealistic notes, pleasant and powdery. Trevor says old lady. Sophisticated.\",6,\"\",\"\"]",
  "[\"2025-11-22\",\"\",\"Penhaligon's Bluebell\",\"Sweet floral and HONEY. Lasts for about 30 seconds. Jo Malone is maybe a better bluebell. Poor longevity.\",5,\"\",\"\"]",
  "[\"2025-11-24\",\"\",\"Penhaligon's Solaris\",\"Plumeria and sharp citrus zest and tuberose. Smells like the beach. I like this but it's for summer. Zero longevity — I really oversprayed and it was gone so soon.\",7,\"\",\"\"]",
  "[\"2025-11-24\",\"\",\"Tocca Colette\",\"Musky, powdery, white floral in the musky drydown. Inoffensive, not memorable, very safe and nice.\",null,\"\",\"\"]",
  "[\"2025-11-25\",\"\",\"Penhaligon's Cairo\",\"Spicy medicinal opening, middle smells like patchouli and incense. Mellow drydown, a little masculine. Fresh like dryer sheets somehow. Resinous. Bandage-y, medicinal oud. Good entry level middle eastern scent. Lighter and prettier than Halfeti. Wore Yasmine in the evening — was too vanilla but I like it.\",null,\"\",\"\"]",
  "[\"2025-11-26\",\"\",\"Penhaligon's Liquid Love\",\"Trevor does not like it, I have a headache. It's not bad, it's interestingly spicy. Probably not a repeat. Dries down to a bland rose smell. Better ways to wear rose notes for sure. Duchess Rose is better.\",null,\"\",\"\"]",
  "[\"2025-11-27\",\"\",\"Tocca Bianca\",\"Fresh citrus with a tea note — a little cleansery and sharp, which is welcome. Sort of like Eau Sézane.\",null,\"\",\"\"]",
  "[\"2025-11-27\",\"\",\"Byredo Gypsy Water\",\"Woody and citrus — lemon. Reminds me a lot of Gaiac 10 and Tam Dao.\",null,\"\",\"\"]",
  "[\"2025-11-28\",\"\",\"Penhaligon's Juniper Sling\",\"Tried again, liberally sprayed with homeoplasmine on wrists to make it stay. Immediately SO FAINT — cannot smell it at all. Put on lotion and reapplied. Dries down woody. Trevor says it smells like pickles. File under: by the fireplace / Tam Dao / Gaiac 10 / Gypsy Water. Update: the pickle smell is how my body chemistry wears sandalwood.\",null,\"\",\"\"]",
  "[\"2025-11-29\",\"\",\"Glossier Sandstone Body Spray\",\"Had a cold.\",null,\"\",\"\"]",
  "[\"2025-11-29\",\"\",\"Tocca Bianca\",\"Pleasantly citrusy with a tea note. Had a cold.\",null,\"\",\"\"]",
  "[\"2025-11-30\",\"\",\"Juliette Has A Gun Not a Perfume\",\"Sick, couldn't smell it.\",null,\"\",\"\"]",
  "[\"2025-12-01\",\"\",\"Byredo Mojave Ghost\",\"A woody, fruity rose with a light pear note (it's sapodilla fruit!). Generally light and pleasant. Pepper? By 4 pm I can still smell it. Clean and sort of fruity but not sweet. Not offensive but not spectacular.\",6,\"\",\"\"]",
  "[\"2025-12-02\",\"\",\"Penhaligon's Constantinople\",\"Vanilla, oud, resinous and mildly spicy. Same genre as Cairo, Halfeti and Yasmine. I like it.\",null,\"\",\"\"]",
  "[\"2025-12-03\",\"\",\"Le Labo Baie 19\",\"Sprayed so beautifully, like patchouli and wet soil, then quickly dried down to a gasoline on wet dirt smell. I guess that's the petrichor smell. After 30 minutes, dried down to patchouli and evergreens with a light freshness — the ozone is still there but it's not as heavy. Now it's a light floral. At the end of the day it smells like dirty wet sand at the beach. Super complicated and weird, would wear again.\",7,\"\",\"\"]",
  "[\"2025-12-04\",\"\",\"Le Labo Aldehyde 44\",\"Super clean, dryer sheets. Maybe a little old fashioned perfume, but very fresh, like soap. Whatever makes The Favourite smell like bubble bath is in this. Dries down to a musky, creamy, non-sweet vanilla, which is perfect. This is what I wanted Another 13 to be. A favorite. Very faint by the afternoon, so no all-day longevity. Would buy in full size.\",9,\"\",\"\"]",
  "[\"2025-12-05\",\"\",\"Le Labo Citron 28\",\"Opens with tuberose and gardenia, jasmine maybe? Getting very little citrus, maybe a little soap. Sweet lemon but no tang or sharpness. Dries down into straight, flat, sweet, light lemon. Nice but faint.\",6,\"\",\"\"]",
  "[\"2025-12-06\",\"\",\"Clean Reserve Rain\",\"Super fresh, white floral and aquatic notes. Smells like a good laundry room or very fresh, sweet rain. A bit like Baie 19 in the drydown. By midday, the drydown reminds me a lot of Halfeti — must be the patchouli.\",7,\"\",\"\"]",
  "[\"2025-12-07\",\"\",\"Le Labo Bergamote 22\",\"Trevor said \\\"hm interesting\\\" which seems bad. A white floral citrus that is pretty average and inoffensive. Poor longevity. Unremarkable.\",5,\"\",\"\"]",
  "[\"2025-12-08\",\"\",\"Le Labo Iris 39\",\"Aggressive, old lady powdery and shrill — reminded me of my across the street neighbor Tyra's house: old lady perfume, a dog, a pool. Didn't get to the drydown because I washed it off. Stuck on my tank top and did not change scents — still very Tyra's house. Will try again.\",2,\"\",\"\"]",
  "[\"2025-12-08\",\"\",\"Le Labo Thé Noir\",\"Very tannic black tea, then a powdery, bitter rose. I like this one. Kind of getting potpourri from it though — it's a bit nauseating with the tobacco and powdery rose notes. Weirdly boozy? Spiced rum? Gone by 4 pm. (Except on my neck — still weirdly boozy at night.)\",6,\"\",\"\"]",
  "[\"2025-12-08\",\"\",\"Freret Eau de Madame\",\"Reminds me of men's Lolita Lempicka — woody violet powder, like a baby perfume. Very clean smelling. Drydown smells like a baby doll. Loud opening but good drydown.\",8,\"\",\"\"]",
  "[\"2025-12-09\",\"\",\"Le Labo Eucalyptus 20\",\"Smoky wood — iconic smoky, with a sharp eucalyptus note. Woody, ozonic and masculine at the opening, but soft, without any rum or floral notes. Smells like extinguished coals. Medicinal oud and mellower in the drydown, then woody and smoky. The Golden Gate Park of perfumes. Ends on a men's deodorant note?! Loved this.\",9,\"\",\"\"]",
  "[\"2025-12-10\",\"\",\"Le Labo Limette 37\",\"Fresh squeezed lime and white floral — clean like the inside of a taqueria. Poor longevity. Not terrible.\",5,\"\",\"\"]",
  "[\"2025-12-10\",\"\",\"Gucci Alchemist's Garden Rosa Incandescente\",\"An AMAZING marine rose that smelled like roses and the oceanic and dried down to a sweet, jammy rose. A beauty.\",10,\"\",\"\"]",
  "[\"2025-12-10\",\"\",\"Le Labo Violette 30\",\"I think this is fake — it smells exactly like Another 13. Initial spray was straight PICKLES and then chewed mint gum. Was expecting powdery violet. Update: not fake, amazing — just needs warmth to open up. Might try the same with Another 13. It might not be a scrubber after all.\",null,\"\",\"\"]",
  "[\"2025-12-11\",\"\",\"Le Labo Neroli 36\",\"A true neroli, faint sunscreen and orange blossom, maybe also a woody note. Then a watermelon / light fruit note. Really beachy, good for summer. Maybe too light for winter.\",null,\"\",\"\"]",
  "[\"2025-12-12\",\"\",\"Gucci The Last Day of Summer\",\"Resinous and sweetly woody, maybe a subtle vanilla note, earthy patchouli. LOVE. A good fall/winter fragrance, kind of in the Halfeti/Constance family but costs the nose the way these Gucci perfumes do — well blended and beautiful.\",10,\"\",\"\"]",
  "[\"2025-12-12\",\"\",\"Le Labo Violette 30 (swatched before shower)\",\"Opened up so beautifully — it's like my memory of Lolita Lempicka. Would buy a full bottle.\",null,\"\",\"\"]",
  "[\"2025-12-13\",\"\",\"Le Labo Violette 30\",\"I love it so much. Buying this when it is released.\",10,\"\",\"\"]",
  "[\"2025-12-14\",\"\",\"Gucci 1921\",\"Beautiful chypre, citrus, neroli and oak moss. Not a ton of longevity. Trevor thinks it's ok.\",null,\"\",\"\"]",
  "[\"2025-12-14\",\"\",\"Byredo Bibliothèque\",\"Super rich, plummy opening that fades to a sweet leather. An unusual gourmand — I get no book note whatsoever. It's nice but maybe not for me. Good winter/holiday scent. Good projection.\",null,\"\",\"\"]",
  "[\"2025-12-15\",\"\",\"Muschio di Luce\",\"A light white musk with a fresh detergent quality — not floral, just clean. Later, woody and peppery. Almost vanilla-y in the drydown — a sweet white musk. Would buy.\",10,\"\",\"\"]",
  "[\"2025-12-16\",\"\",\"Gucci The Virgin Violet\",\"Candied violets, bubble bath, like The Favourite but more powdery. Instantly so beautiful on first spray. One hour in and the longevity is not great. Sweet sugar candy by 8 pm, 6 hours later.\",9,\"\",\"\"]",
  "[\"2025-12-16\",\"\",\"A Kiss from Violet (perfume oil, layered)\",\"Same scent as The Virgin Violet essentially.\",null,\"\",\"\"]",
  "[\"2025-12-17\",\"\",\"Byredo Animalique\",\"Smoky ozonic opening, maybe woody — if the wood was burnt. Hint of violet or maybe a sugary grape candy. Dries down to a pleasant, woody, powdery violet. Fragrantica says powdery suede. Drydown after a few hours is a cozy vanilla suede, really soft. A big difference from first spray to drydown.\",8,\"\",\"\"]",
  "[\"2025-12-18\",\"\",\"Gucci Tears of Iris\",\"Smells like sweet carrots. Sweet, earthy, root-y, violet-y iris. Starts to get more powdery and violet-y and creamy as it dries, like old lipstick. Delicate and pretty. Maybe a little spice from the sandalwood in the drydown. Trevor says VERY old lady — \\\"smells like an old receptionist at a dentist office who LOVES wearing perfume.\\\" Settled down to a sweet and quiet scent.\",7,\"\",\"\"]",
  "[\"2025-12-19\",\"\",\"Le Labo Coriandre 39\",\"A blast of actually spicy coriander and fresh chopped cilantro leaves. Very green and spicy. Not sure if I hate this yet. It's ok on the drydown — a fresh white floral, maybe a little aquatic or salty. Not sweet. A really fresh summer scent. Cinnamon?! Weird but bearable.\",6,\"\",\"\"]",
  "[\"2025-12-20\",\"\",\"Diptyque L'Eau Papier\",\"Like Glossier You but more mature, and sweeter. Clean laundry. Fresh rice. Sprayed at 8:30 and sprayed again at noon. Some pepper in the opening?\",8,\"\",\"\"]",
  "[\"2025-12-21\",\"\",\"Byredo Bal d'Afrique\",\"Big fruity opening, creamy suede woody drydown. Violet a couple of hours in, but it becomes very faint. Faint lemon an hour after that.\",7,\"\",\"\"]",
  "[\"2025-12-22\",\"\",\"Gucci Muschio Mineralis\",\"Very unisex, salty, 90s head shop incense, musky. A little sweet but not cloying. Coats the nose and smells expensive. A love.\",9,\"\",\"\"]",
  "[\"2025-12-22\",\"\",\"Gucci Muschio Mineralis layered with Fading Autumn\",\"Smelled deep and warm and nutty and cozy and wintery. So beautiful.\",10,\"\",\"\"]",
  "[\"2025-12-23\",\"\",\"Gucci The Eye of the Tiger\",\"Rich, ambery, comforting vanilla. I loved this one, although it wasn't extraordinary, just nice. No comment from Trevor — silence is complicity.\",8,\"\",\"\"]",
  "[\"2025-12-24\",\"\",\"Gucci Rosa Sublime\",\"A thick, opulent saffron rose. So fancy.\",9,\"\",\"\"]",
  "[\"2025-12-25\",\"\",\"Gucci Muschio di Luce\",\"Trevor says old lady. I still think it's creamy and cozy.\",null,\"\",\"\"]",
  "[\"2025-12-25\",\"\",\"Onsen Saru (rollerball)\",\"Initially liked it but then Trevor said it smelled fecal and that was all I could smell after.\",null,\"\",\"\"]",
  "[\"2025-12-25\",\"\",\"Le Labo Patchouli\",\"Huge crazy opening but dried down nicely.\",null,\"\",\"\"]",
  "[\"2025-12-26\",\"\",\"Gucci A Reason to Love\",\"Starts off sweet, rose and incense. Layered with a forgotten rose oil. Dried down late in the day to the same sweetness as the Gucci violets.\",null,\"\",\"\"]",
  "[\"2025-12-26\",\"\",\"Régime des Fleurs Himitsu Violet (sneak preview)\",\"Candied violets and Coca Cola — really interesting.\",null,\"\",\"\"]",
  "[\"2025-12-28\",\"\",\"Frédéric Malle Portrait of a Lady\",\"AN ACTUAL JUMPSCARE AND IMMEDIATE SCRUBBER. A very loud rose with BO notes? Cumin? It was intense and I was not ready for it.\",null,\"\",\"\"]",
  "[\"2025-12-28\",\"\",\"Heretic Dirty Hinoki\",\"Fruity and pine-y, sweet. Like a Hansel and Gretel situation. Fresh and damp, clean-forest smelling.\",null,\"\",\"\"]",
  "[\"2025-12-28\",\"\",\"Penhaligon's Elizabethan Rose\",\"A boozy, deep rose with a black tea note, a little spicy, very earthy. This is what Portrait of a Lady might have been without the offensive opening. Hazelnutty! Dries down a bit powdery like a Crabtree & Evelyn bath crumble.\",null,\"\",\"\"]",
  "[\"2025-12-29\",\"\",\"Le Labo Thé Matcha 26\",\"Has that boozy note that Thé Noir and Elizabethan Rose have. Not sure what it is. Light, green tea scent — the boozy note may be fig or wood.\",null,\"\",\"\"]",
  "[\"2025-12-29\",\"\",\"Le Labo Mousse de Chêne 30\",\"Surprise banger! I love this one. Super green and fresh and woodsy without any floral or smokiness. Kids say it smells like Louisiana. Peppery-spicy.\",null,\"\",\"\"]",
  "[\"2025-12-30\",\"\",\"Le Labo Santal 33\",\"I was sleeping on this one. Familiar because it was ubiquitous and frequently duplicated, but this was sweeter than I expected and not pickle-y. Trevor liked it. A winner.\",null,\"\",\"\"]",
  "[\"2025-12-31\",\"\",\"Le Labo Ambrette 9\",\"Pure alcohol on the spray and then… nothing? A little powdery? Pear is developing and it is sweet and musky but so faint. I like it though. I might be anosmic to this.\",null,\"\",\"\"]",
  "[\"2025-12-31\",\"\",\"Le Labo Lys 41\",\"Creamy gardenia, very white floral. Reminds me of Kai, which is a single note gardenia. Seems to have a lot of projection. Peppery? The gardenia settles down a little and it gets a bit muskier.\",null,\"\",\"\"]",
  "[\"2025-12-31\",\"\",\"Byredo Animalique layered with JHAG Not a Perfume\",\"Wore Animalique with JHAG Not a Perfume at the back of my neck — an amazing combination.\",null,\"\",\"\"]",
  "[\"2026-01-02\",\"\",\"Jo Malone Wood Sage and Sea Salt\",\"\",null,\"\",\"\"]",
  "[\"2026-01-03\",\"\",\"Amouage Guidance\",\"Loud opening, sweet maraschino cherries and pickles, floral laundry detergent. A little spicy, a little like a plastic doll from the 80s. What IS this? It's like fruit punch. Nutty. Official notes: pear, olibanum, hazelnut at the top; osmanthus, rose, jasmine sambac, saffron in the middle; sandalwood, vanilla, ambergris, labdanum, akigalawood at the base. Definitely dries down to apricot (osmanthus) and saffron pretty quickly. Trevor was grossed out and made me scrub it. It's going to be on my sweater forever.\",null,\"\",\"\"]",
  "[\"2026-01-03\",\"\",\"MFK Aqua Universalis\",\"Switched to this after Amouage. Trevor liked it — a good dry musky citrus.\",null,\"\",\"\"]",
  "[\"2026-01-04\",\"\",\"Le Labo Musc 25\",\"Bleeeeccchhhhhh. Straight poop in the opening and then aldehydes and pee and baby powder. Horrible.\",0,\"\",\"\"]",
  "[\"2026-01-04\",\"\",\"Guerlain Insolence\",\"Opens on sweet violet candy and stays in violet territory, but dries down to a classic aldehyde old lady smell. Gucci doesn't have this. Really enjoyed it. Might try the EDT.\",7,\"\",\"\"]",
  "[\"2026-01-04\",\"\",\"Byredo Blanche\",\"Put on after a bath for night time and it was perfect for that. Crisp, fresh laundry. Loved it, thought about a full bottle.\",9,\"\",\"\"]",
  "[\"2026-01-05\",\"\",\"Guerlain Musc Outreblanc\",\"Reminded me immediately of a Cacharel perfume from the late 90s, maybe Anaïs Anaïs. Mature, a little salty-sweet, old-fashioned DNA. I like it, though it is strong for what should be a skin scent. There's a violet note and a laconic note, which accounts for the salty sweetness.\",null,\"\",\"\"]",
  "[\"2026-01-05\",\"\",\"Chanel Coromandel\",\"Incensey, resinous, sweet perfume with Chanel DNA — smells like real perfume for sure. Loved this, but might prefer a few similar entries from Penhaligon's.\",8,\"\",\"\"]",
  "[\"2026-01-06\",\"\",\"Chanel Sycomore\",\"Green, fresh, broken branches off the tree in the front yard on Eden. A little smoke, like you tried to burn a fresh branch.\",null,\"\",\"\"]",
  "[\"2026-01-07\",\"\",\"BDK Gris Charnel\",\"Creamy fig and black tea and peppery cardamom. Instant headache, suffocating. AN ABSOLUTE SCRUBBER. Knowing I do not like creamy fig with black tea (it's that cloying boozy note again) makes me realize I love a rose and a violet, or a fresh skin scent. The extrait might be better but I don't like it enough to find out.\",3,\"\",\"\"]",
  "[\"2026-01-07\",\"\",\"Boy Smells Violet Ends (old formulation)\",\"Holy scrubber. Just smells like cigarettes. Not the kind of boy smells I like.\",1,\"\",\"\"]",
  "[\"2026-01-07\",\"\",\"New Notes Bonbons à la Violette\",\"Syrupy and synthetic, grape soda but not cloying. It doesn't smell real but I like it. Longevity is poor — the Gris Charnel on my shirtsleeves obliterated it.\",7,\"\",\"\"]",
  "[\"2026-01-07\",\"\",\"Le Labo Geranium 33\",\"Powdery-peppery-rose-geranium. Pleasant but strong. Would wear again.\",7,\"\",\"\"]",
  "[\"2026-01-08\",\"\",\"Guerlain Tobacco Honey\",\"What it says on the tin. A huge, smooth, expensive scent. BIG. Not me but it's beautiful.\",7,\"\",\"\"]",
  "[\"2026-01-08\",\"\",\"Annick Goutal La Violette\",\"Soft, violet leaf and flower, green not sweet. Something in it reminds me of refried beans. Otherwise it would be lovely.\",7,\"\",\"\"]",
  "[\"2026-01-09\",\"\",\"MFK Absolue de Matin\",\"Powdery citrus rind — fresh, not sweet, very soft, very safe. Consequently a bit boring. Smells just like Nivea cream.\",6,\"\",\"\"]",
  "[\"2026-01-09\",\"\",\"Heretic Dirty Violet\",\"No floral, all green, incense, and musk. Powdery. Patchouli. A bit of rose. Mostly clean musk. This one is amazing and I love it. Not dissimilar to Muschio Mineralis — that's the patchouli — drydown like the prettiest head shop you can imagine.\",10,\"\",\"\"]",
  "[\"2026-01-10\",\"\",\"Boy Smells Citrush\",\"Nice pomelo-aldehyde opening, a little powdery. Sprayed at 8:45, pretty much gone by noon. It's ok — not offensive or unpleasant, but not terribly special. Didn't get the terpenes/poppers note.\",6,\"\",\"\"]",
  "[\"2026-01-10\",\"\",\"Jo Malone Violet and Amber Absolu\",\"Resinous amber and flashes of sweet violet. I love this one — a combination of two unlikely notes that I love on their own, magic together. Dries down to patchouli.\",10,\"\",\"\"]",
  "[\"2026-01-11\",\"\",\"Juliette Has a Gun Lipstick Fever\",\"Beautiful not-too-sweet powdery violet and iris. Plastic doll heads in the opening. Waxy lipstick. Very low sillage. Would consider a full bottle. After respraying twice: big carroty-iris opening. Really like this. It stayed on all day.\",9,\"\",\"\"]",
  "[\"2026-01-12\",\"\",\"Fortuitous Finley\",\"Herbal and sweet — grassy anise and violet leaf. A lot like Baie 19 — wet, fresh, airy, ozonic, salty. Very unisex to masculine. Top note is pistachio.\",8,\"\",\"\"]",
  "[\"2026-01-12\",\"\",\"Guerlain Shalimar L'Essence\",\"Like sticking your nose in a cat covered in vanilla flea powder but it's good. A little old lady on the opening but perfectly gorgeous drydown.\",8,\"\",\"\"]",
  "[\"2026-01-13\",\"\",\"BDK 312 Saint-Honoré\",\"Airy, spicy, vaguely white floral with a warm cedar or hinoki wood. Perfectly pleasant on opening. Official notes: pink pepper, orange blossom, Angelica root, iris, Ambroxan, white musk, Thai oud. Actually really similar to Glossier You. Absolutely identical to Another 13 in the drydown.\",8,\"\",\"\"]",
  "[\"2026-01-14\",\"\",\"Diptyque Eau de Sens\",\"A bitter, powdery citrus. It's pleasant and inoffensive enough. Actually smells like carpet deodorizer. Drydown is so faint. Trevor might like this but it isn't anything special.\",6,\"\",\"\"]",
  "[\"2026-01-14\",\"\",\"Kiehl's Original Musk\",\"So animalic and funky on first spray but stick with it and it gets clean and soapy. A definite store-tester-to-full-bottle mismatch. Good though, if you can make it to the drydown.\",7,\"\",\"\"]",
  "[\"2026-01-15\",\"\",\"Keiko Mecheri Peau de Pêche\",\"Super light white tea and juicy white peach. 3 sprays and it is so faint, but really pretty and delicate.\",9,\"\",\"\"]",
  "[\"2026-01-16\",\"\",\"MFK 724\",\"Smells like Gap perfume from the early 2000s on a ChatGPT recommendation for airy and light like Peau de Pêche. Drydown is really similar to MFK Absolue de Matin — boring, powdery citrus. Very similar to Eau de Sens.\",6,\"\",\"\"]",
  "[\"2026-01-16\",\"\",\"Ffern Spring 25\",\"Interesting immediately — a minty, herbal opening that makes your mint receptors tingle, with strong, sour lemon zest. The vetiver is a base note but it's present in the opening. Rose and violet with some lemon peel persisting in the middle. Like cold mint lemonade in a florist's workroom. Very lush bath bomb but not in a bad way. Bought the full bottle right away.\",10,\"\",\"\"]",
  "[\"2026-01-17\",\"\",\"Byredo La Tulipe\",\"Fresh green clean modern floral. Pretty, low projection, inoffensive, beautiful floral opening, creamier in the drydown. Meets expectations but not exciting. A lot of vetiver in the drydown.\",7,\"\",\"\"]",
  "[\"2026-01-17\",\"\",\"Comme des Garçons 2\",\"Clean spicy magnolia with a dry citrus peel note in the opening, then becomes spicy-powdery. Cumin is in the base but pretty far forward at the early opening. Can smell the incense and ink — the ink note is neat. Trevor recoiled in horror. Scrubbed it off before I got to the drydown. Too sharp.\",6,\"\",\"\"]",
  "[\"2026-01-17\",\"\",\"Chanel Misia\",\"SOO MUCH IRIS in the opening — just a blast of pure iris. After the big iris opening, sweet (but not too sweet) violet. Dry, no Chanel aldehydes up front, low sillage. Five minutes later, a very pretty, berry, jammy, sweet subtle rose. Then powdery like a chalky bath crumble. The drydown is pure lipstick.\",9,\"\",\"\"]",
  "[\"2026-01-18\",\"\",\"Escentric Molecules Escentric 01\",\"Light floral, but not white floral — green woods? Aromatic and chemical. If Tam Dao and Juliette Has a Gun had a baby. I like it. Lasts about 5 hours, needs 2 sprays. Not breaking any new ground — I'd wear Tam Dao if I wanted this smell.\",7.5,\"\",\"\"]",
  "[\"2026-01-18\",\"\",\"Balenciaga Paris\",\"Top note of bright lemon, some buttery iris, violet or rose? Pretty, sweet purple floral with a woody base. Official notes: bergamot, violet, cedarwood, carnation. Classic in the vein of Insolence and Après l'Ondée, but more perfume-y and less sugary sweet. Boring in the end.\",7.5,\"\",\"\"]",
  "[\"2026-01-18\",\"\",\"Osmanthus Nectar\",\"Honeyed vanilla peach, warm and sweet, and resinous like a baked nectarine. Syrupy without being sweet. Really lovely.\",8,\"\",\"\"]",
  "[\"2026-01-19\",\"\",\"Where My Heart Beats\",\"Rose and white floral at the opening — reminds me of Eau d'Issey, airy and mineral peony. The violet leaf is green and apparent if you apply enough. Dries down subtly and pleasantly — a very solid, very pretty springtime classic. Light and billowy and soft. Nicely musky at the end of the day.\",8,\"\",\"\"]",
  "[\"2026-01-20\",\"\",\"Dior Gris Dior\",\"Challenging and boozy opening reminiscent of Thé Noir or Gris Charnel, but dries into a cedar-forward rose patchouli with powdery bergamot in the background. Spicy and nice. Longevity is meh.\",8,\"\",\"\"]",
  "[\"2026-01-20\",\"\",\"JHAG Musc Invisible\",\"Identical to Kiehl's drydown, which is unfortunately identical to dish soap. Gets the job done.\",7.5,\"\",\"\"]",
  "[\"2026-01-20\",\"\",\"Acne Studios / Frédéric Malle\",\"Both soapy and fruity. Olive says public restroom. Pink McDonald's soap.\",5,\"\",\"\"]",
  "[\"2026-01-20\",\"\",\"Chanel Comète\",\"Violet! Bubble bath! Iris! Cherry! Aldehydes from the Chanel DNA! It's The Favourite but fancier. Soapy, musky drydown.\",8,\"\",\"\"]",
  "[\"2026-01-21\",\"\",\"The Body Shop White Musk EDP\",\"This is exactly what I was looking for — lasts all day, smells amazing, irritates my lungs like crazy. If I had a sweet single note raspberry, I could layer it and hit that scent memory.\",8,\"\",\"\"]",
  "[\"2026-01-22\",\"\",\"Byredo Velvet Haze\",\"A soft, chocolatey patchouli — just a tiny cloud of softness with a little jasmine funk. Not for me, but nicely blended and conveyed its intended purpose.\",7,\"\",\"\"]",
  "[\"2026-01-22\",\"\",\"Arquiste The Architects Club\",\"Something! Not boring. Spicy, tart sour citrus, juniper, something evergreen. Salt air. Vetiver. Really fresh and structured and unisex. Dries down powdery but in a woody vanilla way. A surprise love.\",8.5,\"\",\"\"]",
  "[\"2026-01-23\",\"\",\"Serge Lutens Féminité du Bois\",\"A very spicy almost potpourri rose — maybe a scrubber. Reminds me of Lush, very peppery. Apparently it's plum and cinnamon. Scrubbed. Saving this for a snowy night. Weird in a bad way.\",5,\"\",\"\"]",
  "[\"2026-01-23\",\"\",\"Guerlain Herbes Troublantes\",\"Green herbs and lemon rounded out by something (musk apparently). There's mint and the lemon is actually bergamot. Super fresh, very smooth and well blended. Smells like a fancy hotel lobby. Did not last very long at all. Faint unsweetened orange in the drydown.\",7.5,\"\",\"\"]",
  "[\"2026-01-23\",\"\",\"Etat Libre d'Orange Putain des Palaces\",\"Powdery iris — vaguely floral, but not white floral. A rich spicy ginger at the top. Rose. Raspberry comes out about 30 minutes later. Drydown is sweet violet.\",9,\"\",\"\"]",
  "[\"2026-01-24\",\"\",\"Guerlain La Petite Robe Noire\",\"Insolence DNA, pretty cherry. A Shirley Temple of a perfume.\",8.5,\"\",\"\"]",
  "[\"2026-01-24\",\"\",\"The Body Shop Musk Oil\",\"All smell the same — oil, perfume, body spray, Kiehl's musk — totally redundant soap smell. Might prefer the body spray because it is the lightest.\",7,\"\",\"\"]",
  "[\"2026-01-24\",\"\",\"Diptyque Eau Nabati\",\"Warm tobacco vanilla incense — this is a Halfeti or Yasmine perfume and I like it a lot.\",8,\"\",\"\"]",
  "[\"2026-01-24\",\"\",\"Louis Vuitton Orage\",\"Pissy, woody (sandalwood or a blonde wood), resinous, piney. Leans masculine. I like it and think it might transform throughout the day but it didn't wow me.\",6.5,\"\",\"\"]",
  "[\"2026-01-24\",\"\",\"D'annam Kimono\",\"White rice and lipstick, a little white floral and violet. The rice note is unusual but so creamy and warm. The violet is sweet. So pretty.\",9,\"\",\"\"]",
  "[\"2026-01-25\",\"\",\"Imaginary Authors A Little Secret\",\"Cherries! Pines! Coffee! Pie crust! Insolence drydown!\",10,\"\",\"\"]",
  "[\"2026-01-26\",\"\",\"Creed Carmina\",\"A grown up violet, very perfumey. Sophisticated violet floral, but makes me realize I don't love classic perfume that much — I prefer indies and niches to big fancy houses. Opened with saffron, which I love, but Jo Malone wins this one.\",8,\"\",\"\"]",
  "[\"2026-01-26\",\"\",\"Penhaligon's Violetta\",\"Identical to Annick Goutal down to the refried beans note.\",null,\"\",\"\"]",
  "[\"2026-01-26\",\"\",\"Vilhelm Parfumerie Basilico and Fellini\",\"Really interesting — juicy, dry grassy without being green, herbal and fruity.\",7,\"\",\"\"]",
  "[\"2026-01-26\",\"\",\"Vilhelm Parfumerie Morning Chess\",\"Sexy and masculine, top note of bergamot, warm woody leather. Dressy but very much for men.\",8,\"\",\"\"]",
  "[\"2026-01-26\",\"\",\"Tom Ford Violet Blonde\",\"Woody spicy violet with notes of jasmine and palo santo.\",7,\"\",\"\"]",
  "[\"2026-01-26\",\"\",\"Dries van Noten Fleur du Mal\",\"Light, airy, leather and osmanthus rose — feel like a grounding note is missing. Nice enough.\",7,\"\",\"\"]",
  "[\"2026-01-27\",\"\",\"Ffern Spring 25 (full size)\",\"Wearing again because I got the full size today — and I'm glad I did.\",null,\"\",\"\"]",
  "[\"2026-01-27\",\"\",\"Louis Vuitton L'Immensite\",\"Decidedly for men, but DREAMY. Spicy and citrus.\",9,\"\",\"\"]",
  "[\"2026-01-27\",\"\",\"Guerlain Iris Pallida 6\",\"Creamy iris, sophisticated but not unpleasant. Sweet (that's the almond note) and not terribly powdery — like a grownup Lolita Lempicka.\",10,\"\",\"\"]",
  "[\"2026-01-28\",\"\",\"Maison Crivelli Iris Malikhan\",\"A fairly perfumey iris that verges on old lady without being fully old lady. Sophisticated with low projection — it's no Iris Pallida.\",7,\"\",\"\"]",
  "[\"2026-01-28\",\"\",\"Guerlain Cuir Beluga\",\"Linear salty playdough, powdery sweet vanilla suede. Well blended and subtle but also wtf playdough.\",6,\"\",\"\"]",
  "[\"2026-01-28\",\"\",\"YSL Babycat\",\"A mystery winner. A gentler Halfeti. A more modern Shalimar L'Essence. So soft and powdery and sweet and gorgeous. Was not expecting to love Babycat.\",10,\"\",\"\"]",
  "[\"2026-01-29\",\"\",\"Régime des Fleurs Chloé Sévigny Little Flower\",\"Sweet, incensey, iced tea rose. Really a masterful blend of notes to get the perfect rose. Portrait of a Lady dialed back to 5. Better than all the Penhaligon's roses.\",9,\"\",\"\"]",
  "[\"2026-01-29\",\"\",\"Vilhelm Parfums Poets of Berlin\",\"Blueberry and WOOD. Supposed to evoke Iggy Pop and David Bowie living in Berlin eating pastries. Fruity and buttery without being cloying. Develops into something VERY sweet, maybe too sweet. Drydown is a grassy vanilla. Good but not full bottle worthy — there when I need to smell like a muffin.\",7,\"\",\"\"]",
  "[\"2026-01-29\",\"\",\"DS & Durga Black Magenta\",\"Dark violets, brine, saffron? Not sweet, barely floral, powdery but dark. Sweet non-acidic pineapple and pepper, iris and amber and sandalwood. The pineapple really shines through at the top. Dries down into powdery fruity iris, very pleasant.\",7.5,\"\",\"\"]",
  "[\"2026-01-29\",\"\",\"Byredo Animalique\",\"Wore to Olive's performance — really suede-y this time. Love this for a night out.\",null,\"\",\"\"]",
  "[\"2026-01-30\",\"\",\"Chloé Atelier des Fleurs Violet\",\"Elegant, prim violet soliflore — a perfect example of what a violet fragrance should be (mercifully free of bean notes, not old lady, not too sweet). Longevity is not perfect — very faint by 2:15, which is fine. Very lovely, safe but not boring. No weird notes.\",10,\"\",\"\"]",
  "[\"2026-01-30\",\"\",\"Guerlain Iris Torréfié\",\"More spicy floral than Iris Pallida (which leans vanilla), but still a rich iris. Deep coffee note and a sharp bergamot top note. Guerlain never misses. Pallida wins this one but they are both good. Lipstick and coffee.\",9,\"\",\"\"]",
  "[\"2026-01-30\",\"\",\"Louis Vuitton Rose de Vents\",\"A straightforward spicy rose, right in the middle of Little Flower and Portrait of a Lady. Actually really similar to Little Flower. Rose, pepper, iris and cedar.\",8,\"\",\"\"]",
  "[\"2026-01-30\",\"\",\"Frédéric Malle Lipstick Rose / MMM Lipstick On (samples)\",\"Why do all Frederic Malles have a weird funky note?\",null,\"\",\"\"]",
  "[\"2026-01-30\",\"\",\"By Rosie Jane Rosie (perfume oil)\",\"A perfect salty light floral musk. Maybe the best musk?\",9,\"\",\"\"]",
  "[\"2026-01-31\",\"\",\"Ffern Summer 25\",\"Sweet citrus, incense, maybe faint peach. Missing the oomph of the mint and lemon of Spring 25. Powdery woody in the drydown.\",7,\"\",\"\"]",
  "[\"2026-01-31\",\"\",\"19-69 San Pedro\",\"Really similar to Ffern Spring 25 but with a bit more peach and a powdery note. Fresh and green. Cactus?\",6.5,\"\",\"\"]",
  "[\"2026-01-31\",\"\",\"Diptyque Orphéon\",\"No notes needed. Understated cedar and jasmine — so elegant and soft.\",10,\"\",\"\"]",
  "[\"2026-02-01\",\"\",\"D'annam Vietnamese Coffee\",\"Sweet, bitter, photorealistic. Possibly too gourmand but I'll wait a while to decide. Good Sunday morning perfume, pretty syrupy though.\",7,\"\",\"\"]",
  "[\"2026-02-01\",\"\",\"Pomelo Oolong\",\"Smells like a boba shop — lychee tea. White floral. Photorealistic and mouth watering.\",9,\"\",\"\"]",
  "[\"2026-02-02\",\"\",\"Liis Floating\",\"A soft skin scent peach, a bit musky. Sprayed both wrists and chest and it's really faint, but pretty. Ethereal but not detectable.\",7,\"\",\"\"]",
  "[\"2026-02-02\",\"\",\"Goutal Eau d'Hadrien\",\"A really good, fresh, unsweetened citrus that doesn't smell like cleaning products.\",8,\"\",\"\"]",
  "[\"2026-02-02\",\"\",\"Parfum d'Empire Equistrius\",\"Champagne and powdery violets, iris. Really pretty.\",8,\"\",\"\"]",
  "[\"2026-02-02\",\"\",\"Vilhelm Parfumerie Chimilka\",\"Fuzzy juicy funky BO peach — sweet with a mouthwatering tea note, like a sweaty boba shop. Sugar note does some heavy lifting in the opening.\",7,\"\",\"\"]",
  "[\"2026-02-03\",\"\",\"Maison Margiela Bubble Bath\",\"Okay I guess. I don't really love it — it's too soapy or floral or sweet or something. The Favourite is so much better.\",null,\"\",\"\"]",
  "[\"2026-02-03\",\"\",\"Chanel N°19 Poudré\",\"Big opening of iris and aldehyde, dries down to the softest powder. Lovely and classic. Lasts all day as a rich iris. Chanel is Chanel for a reason.\",8,\"\",\"\"]",
  "[\"2026-02-04\",\"\",\"Dedcool 03 Blonde\",\"Woody green violet with some leather and rose. Masculine but also violet-sweet. Jo Malone Violet and Amber Absolu does what this should do, so it's unfortunately a bit redundant. Ranks higher than Tom Ford Violet Blonde, which it is clearly copying.\",7,\"\",\"\"]",
  "[\"2026-02-04\",\"\",\"Miu Miu Eau Rosée\",\"Dewy fruity light airy rose with a sweet juicy pear opening. Really pretty. Official notes: lychee, lily of the valley, white musk.\",8,\"\",\"\"]",
  "[\"2026-02-04\",\"\",\"Thierry Mugler Angel\",\"Nope nope nope nope — smells like piss on my skin. Couldn't stick with it, had to scrub.\",0,\"\",\"\"]",
  "[\"2026-02-04\",\"\",\"Prada Infusion d'Iris\",\"Creamy iris but also the sort of carpet powder note in Eau des Sens. Spoiled by Chanel and Guerlain irises. I love a good iris but probably wouldn't reach for this one.\",7.5,\"\",\"\"]",
  "[\"2026-02-04\",\"\",\"DS & Durga Big Sur Eucalyptus\",\"Definitely eucalyptus, though there is something seaweedy or creamy or otherwise weird about it. Very fresh. Prefer Le Labo Eucalyptus.\",7.5,\"\",\"\"]",
  "[\"2026-02-04\",\"\",\"Le Labo Labdanum 18\",\"Animalic powdery warm vanilla amber — aromatic powder with a spicy resinous quality. Really pleasing, musky and not remotely floral. Syrupy drydown, funky.\",null,\"\",\"\"]",
  "[\"2026-02-05\",\"\",\"Parfums de Nicolaï Violette in Love\",\"Iris opening, soapy violet. Really a light cloud of soapy iris and violet. It's nice! Irisy without being too powdery, violet without refried beans.\",null,\"\",\"\"]",
  "[\"2026-02-06\",\"\",\"Hermès Concentré de Pamplemousse Rose\",\"A deep, serious citrus — mature and complex, not light or cleansery. What I wanted from Jo Malone. Pretty dark rose, grapefruit and woody vetiver. Opens with bitter citrus and dries down into a juicy but tart rose.\",9,\"\",\"\"]",
  "[\"2026-02-07\",\"\",\"Guerlain Patchouli Paris\",\"Good, expertly blended, objectively nice, in the family of Babycat and Halfeti. Chocolatey drydown.\",8,\"\",\"\"]",
  "[\"2026-02-08\",\"\",\"D'annam White Rice\",\"Initial opening of actual steamed white rice, then some kind of aldehyde floral in the drydown. Wish it was white rice the whole time. Leaf and musk are responsible for the drydown. Just wear Diptyque.\",7,\"\",\"\"]",
  "[\"2026-02-08\",\"\",\"D'annam Strawberry Mochi\",\"Weirdly ricier than White Rice but also sweet. Persie says \\\"it smells like cookies.\\\" Ultimately a scrubber.\",7,\"\",\"\"]",
  "[\"2026-02-09\",\"\",\"Ganymede (Marc-Antoine Barrois)\",\"Leather, metal, violets, antiseptic, skanky, spicy. Cannot wear this to the dentist. Projection is HUGE for a smell that is so weirdly indecent. Want to try one small spray and let it sit a while.\",5,\"\",\"\"]",
  "[\"2026-02-09\",\"\",\"Ormonde Jayne Evernia\",\"Ugh, perfume.\",6,\"\",\"\"]",
  "[\"2026-02-09\",\"\",\"Hermès Musc Pallida\",\"Unisex soapy musk and understated iris. Elegant. Thin White Duke era Bowie.\",8,\"\",\"\"]",
  "[\"2026-02-09\",\"\",\"DS & Durga Debaser\",\"Piña colada that turns to creamy fresh green fig. Reminds me of the fig trees by my preschool — fuzzy, photorealistic. Fruity without being too sweet. Dries down to Abercrombie & Fitch cologne — scrubs off easily. Good for a couple of hours.\",8,\"\",\"\"]",
  "[\"2026-02-09\",\"\",\"Etat Libre d'Orange She Was an Anomaly\",\"Iris and musk forward in the opening, sharper citrus and white floral in the middle. I like it, but it's a skin scent better executed by Guerlain (Iris Pallida), Hermès (Musc Pallida), Glossier (You), or 10:15 (Sonic Flower).\",7.5,\"\",\"\"]",
  "[\"2026-02-10\",\"\",\"Loewe 7\",\"Sweet, resinous, incense-y, but light. Incense, red pepper berries, sweetness from red apple. Genius. It's for men, but who cares. Actually — let's switch it up. For some reason the fact that it's for men made me not want to wear it.\",8,\"\",\"\"]",
  "[\"2026-02-10\",\"\",\"Dries van Noten Neon Garden\",\"Creamy iris opening — almost a soliflore iris — but there's mint and carrot seed, and Ambroxan and musk in the drydown. 10 hours later this is still crazy strong. Insane longevity. Gets louder and stronger after hours and hours of wear — becomes very synthetic BO. Still creamy iris, but with shaving cream sprayed on it.\",8,\"\",\"\"]",
  "[\"2026-02-11\",\"\",\"Le Labo Violette 30\",\"Got my official sample — it's still Santal 33 and Another 13 with a little violet.\",9,\"\",\"\"]",
  "[\"2026-02-12\",\"\",\"Diptyque Lilyphea\",\"SO GREEN. Watery. Fresh. White floral. Almost a honeydew melon (that's the vanilla). Actually kinda bad once you get to the vanilla.\",6,\"\",\"\"]",
  "[\"2026-02-12\",\"\",\"Baccarat Rouge 540\",\"Toasted marshmallows, strawberry and saffron on the opening. Did two sprays which was 1.5 sprays too many. Not today Satan.\",5,\"\",\"\"]",
  "[\"2026-02-12\",\"\",\"Henry Rose Windows Down\",\"Nice grapefruit and bergamot opening, pleasant musky drydown. Can probably find a fancier version of this, but it's nice.\",7,\"\",\"\"]",
  "[\"2026-02-12\",\"\",\"Jo Malone Lime Basil Mandarin\",\"Used it as a focus scent, wasn't really able to focus. One of the better citrus options.\",7.5,\"\",\"\"]",
  "[\"2026-02-13\",\"\",\"Régime des Fleurs Chloé Sévigny Little Flower\",\"A known quantity. Really good.\",9,\"\",\"\"]",
  "[\"2026-02-13\",\"\",\"By Rosie Jane Rosie EDP\",\"Couldn't smell it.\",3,\"\",\"\"]",
  "[\"2026-02-13\",\"\",\"Arquiste Indigo Smoke\",\"Incredible.\",9,\"\",\"\"]",
  "[\"2026-02-13\",\"\",\"O, Unknown\",\"Also tea, more tannic, not quite as good as Indigo Smoke.\",7,\"\",\"\"]",
  "[\"2026-02-13\",\"\",\"Saint Julep\",\"SWEEEEEEET.\",7,\"\",\"\"]",
  "[\"2026-02-13\",\"\",\"French Defense\",\"A scrubber.\",9,\"\",\"\"]",
  "[\"2026-02-13\",\"\",\"Gucci Mémoire d'une Odeur\",\"Super elegant and fancy. Chamomile and hotel lobby.\",9,\"\",\"\"]",
  "[\"2026-02-14\",\"\",\"Guerlain Neroli Outrenoir\",\"Heavenly citrus and tea.\",null,\"\",\"\"]",
  "[\"2026-02-14\",\"\",\"Chanel Gardenia\",\"A perfect gardenia, opens photorealistic and peppery, dries down in a linear fashion. Really nice.\",8.5,\"\",\"\"]",
  "[\"2026-02-14\",\"\",\"Arquiste Indigo Smoke\",\"Dries down to be identical to Chanel Sycomore (or Coromandel?), but gorgeous and woody and smoky and tannic at the opening. I like this a lot.\",9,\"\",\"\"]",
  "[\"2026-02-15\",\"\",\"Le Labo Poivre 23\",\"In the realm of Babycat and Halfeti — a vanilla patchouli at its core — but with a beautiful spicy black pepper opening, dry, warm Gaiac wood in the base. Smells like a shop in Chinatown: incense and spices, sweetness.\",8,\"\",\"\"]",
  "[\"2026-02-15\",\"\",\"Le Labo Tonka 25\",\"Animalic, resinous, soapy-musky in the opening. A bit spicy. Orange blossom and cedar. Gets creamier as it wears. Super cozy and musky in the drydown.\",8,\"\",\"\"]",
  "[\"2026-02-15\",\"\",\"By Rosie Jane Rosie EDP\",\"Initially anosmic but then getting musky white floral and… burnt hair?! Super weird the way this burns my nostrils. Burning eventually went away but I prefer the oil.\",8,\"\",\"\"]",
  "[\"2026-02-16\",\"\",\"Le Labo Bigarade 18\",\"This is what that argan oil shampoo smells like!!! Bitter orange, musk and wood. Even Trevor likes it. Fades down to a sunscreen scent, but still pleasant, not chemical.\",10,\"\",\"\"]",
  "[\"2026-02-17\",\"\",\"Le Labo Lavande 31\",\"Neroli and musk make it similar to Bigarade 18, but lavender makes it pleasantly soapy. Very good, very wearable.\",9,\"\",\"\"]",
  "[\"2026-02-18\",\"\",\"Le Labo Fleur d'Oranger\",\"Photorealistic orange blossom with lemon in the opening. A nice citrus — no wood notes, just citrus and musk. Really nice opening.\",8,\"\",\"\"]",
  "[\"2026-02-19\",\"\",\"Gucci A Floral Verse\",\"A challenging, smoky opening that dries into jasmine and smoky black tea, then a fruity (osmanthus-y) jasmine and smoother tannic note with no smoke. A musky shampoo opening that almost has a cigarette note.\",8,\"\",\"\"]",
  "[\"2026-02-20\",\"\",\"Le Labo Rose 31\",\"Peppery spicy rose opening, cumin note (whyyyyyy do they do that?). SCRUBBER. I don't know if I should try again to get past the challenging opening but it's just such a foul BO/dirty note.\",4,\"\",\"\"]",
  "[\"2026-02-20\",\"\",\"Serge Lutens Fille en Aiguilles\",\"Piney pine sap, so wintery — smoky, woody — literal pine needles. Becomes feu de bois in the drydown. Upgrading to 9/10.\",7.5,\"\",\"\"]",
  "[\"2026-02-20\",\"\",\"Miu Miu EDP\",\"Really pleasant — rose, musk, white floral, aquatic/mineral notes. Airy, watery, if pale blue were a fragrance. Love this. Longevity isn't super, but it's gentle and lovely.\",10,\"\",\"\"]",
  "[\"2026-02-21\",\"\",\"Le Labo Vanilla\",\"A cardboard, tree bark vanilla — not too sweet, creamy. Not gourmand.\",9,\"\",\"\"]",
  "[\"2026-02-21\",\"\",\"Le Labo Myrrhe\",\"Resinous and fruity — balsamic, osmanthus? Rich apricot? Like a fruit roll up at church. I like it but don't know if I would reach for it. Upgrading to 8.5/10 — smells like jasmine peach milk tea when it dries. Just gorgeous.\",7.5,\"\",\"\"]",
  "[\"2026-02-21\",\"\",\"D'annam Hinoki Meditation\",\"Smells like a Japanese bath, skin, cedar trees. There's a little bit of a funk similar to Onsen Saru, but it's not unbearable. Masculine drydown.\",7.5,\"\",\"\"]",
  "[\"2026-02-22\",\"\",\"Le Labo Benjoin 19\",\"Woody resinous, sweet with a vinegar note, dusty library challenging opening — but very interesting.\",7.5,\"\",\"\"]",
  "[\"2026-02-22\",\"\",\"Le Labo Osmanthus 19\",\"A green woody leafy boozy scent in the opening. Also resinous but there is a faint woody peach. Some smokiness. Soapy lavender. Complex and pretty, low sillage — this is the Kyoto exclusive. Need to try again and maybe overspray. Huge potential.\",8,\"\",\"\"]",
  "[\"2026-02-22\",\"\",\"Chanel Paris-Biarritz\",\"So green. Faint tart citrus. Fades away immediately.\",7.5,\"\",\"\"]",
  "[\"2026-02-22\",\"\",\"Guerlain Pamplelune\",\"Initially a good and photorealistic grapefruit, but the drydown is all patchouli, blackcurrant and vanilla. Okay but not the fresh citrus I wanted.\",7,\"\",\"\"]",
  "[\"2026-02-22\",\"\",\"Diptyque L'Eau des Hespérides\",\"Minty lemon, fresh fresh fresh. Herbal citrus. Reminds me of SLC hotel body wash — airy, salty citrus. Ffern Spring 25 does this better/sweeter, but this is definitely an herbal citrus.\",8,\"\",\"\"]",
  "[\"2026-02-22\",\"\",\"Clean Reserve Skin\",\"Like By Rosie Jane with the caramel note. Burns my nose the same way as By Rosie Jane.\",7,\"\",\"\"]",
  "[\"2026-02-23\",\"\",\"Byredo Bal d'Afrique\",\"Safe, elegant, fruit punch and sandalwood. Leather and violet in the drydown — really similar to Animalique.\",7.5,\"\",\"\"]",
  "[\"2026-02-24\",\"\",\"Liis Ethereal Wave\",\"Light citrus tea, fruity and bitter. Nice, airy.\",8,\"\",\"\"]",
  "[\"2026-02-25\",\"\",\"Le Labo Vanille 44\",\"Paris exclusive. Woody vanilla — smooth and unobtrusive.\",9,\"\",\"\"]",
  "[\"2026-02-26\",\"\",\"Tom Ford Lost Cherry\",\"Opens like cherry pie filling spilled on the Macy's counter. Mellows to a sweet, mild cherry. Dries down to a mellow cherry almond — very Guerlain La Petite Robe Noire or Imaginary Authors A Little Secret. High quality and smooth. Gourmand but good.\",9,\"\",\"\"]",
  "[\"2026-02-27\",\"\",\"Le Labo Tuberose 40\",\"Neroli forward with cedar and white floral notes — a smooth and tolerable white floral. Short longevity though.\",9,\"\",\"\"]",
  "[\"2026-02-27\",\"\",\"Le Labo Ylang 44\",\"Heavy patchouli, tropical incense.\",null,\"\",\"\"]",
  "[\"2026-03-01\",\"\",\"Miu Miu Bleue\",\"All the Miu Miu DNA is the same — airy light lily of the valley — but I love them that way. Sparkling citrus, unobtrusive.\",8,\"\",\"\"]",
  "[\"2026-03-02\",\"\",\"Tocca Colette\",\"Pretty and powdery but more sandalwood in the opening than I remember. A repeat wear. Really similar to Byredo.\",null,\"\",\"\"]",
  "[\"2026-03-03\",\"\",\"Diptyque Orphéon EDT\",\"Signature material. Lasts all day, powdery sharp citrus.\",10,\"\",\"\"]",
  "[\"2026-03-04\",\"\",\"Gucci The Virgin Violet\",\"Comfort zone — needed something that wouldn't fight with my white musk body wash.\",null,\"\",\"\"]",
  "[\"2026-03-04\",\"\",\"Diptyque Orphéon EDT\",\"Later in the day.\",null,\"\",\"\"]",
  "[\"2026-03-05\",\"\",\"Diptyque Orphéon EDP\",\"I just love Orphéon.\",null,\"\",\"\"]",
  "[\"2026-03-06\",\"\",\"Diptyque L'Ombre dans l'Eau edp\",\"A watery, spicy rose.\",null,\"\",\"\"]",
  "[\"2026-03-07\",\"\",\"Chanel Chance Eau Splendide\",\"Raspberry violet musk — as close to the 1997 Catherine smell as I have gotten so far.\",null,\"\",\"\"]",
  "[\"2026-03-08\",\"\",\"Clue with the Candlestick\",\"Smells like melting crayons on a lightbulb (complementary). Smoky resinous spicy. Smells like incense, but very waxy. Burnt out candle.\",null,\"\",\"\"]",
  "[\"2026-03-08\",\"\",\"Initio Musk Therapy\",\"Clean musk, maybe a little vanilla-y. Smells like clean laundry or unscented stick deodorant from the 90s. Very clean.\",null,\"\",\"\"]",
  "[\"2026-03-09\",\"\",\"Serge Lutens Clair de Musc\",\"Super clean and fluffy white musk. Similar to Musk Therapy. At the end of the day, smells a lot like Violette fr avec amour. This is the Kiehl's scent I was looking for.\",10,\"\",\"\"]",
  "[\"2026-03-10\",\"\",\"Rhizome 06\",\"Woody-powdery — getting a minty iris, interesting. Apparently a dupe for Dior Bois d'Argent, resinous iris with a bergamot note, but all I get is creamy mint. Dries down to green, rooty, earthy powdery. I think Chanel No. 19 Poudré does the same job but I like this one a lot — it's neat.\",8,\"\",\"\"]",
  "[\"2026-03-10\",\"\",\"Narciso Rodriguez For Her Pure Musc\",\"Cozy powdery lightly floral musk, soft and clean, fresh laundry without being too chemical. Not interesting. Comforting.\",8,\"\",\"\"]",
  "[\"2026-03-10\",\"\",\"Diptyque L'Eau Papier\",\"This is the real rice scent. So pretty and soft and comforting.\",10,\"\",\"\"]",
  "[\"2026-03-11\",\"\",\"Etat Libre d'Orange Ghost in the Shell\",\"Citrus shampoo, like a cheap version of Eau des Sens. Not great.\",6,\"\",\"\"]",
  "[\"2026-03-11\",\"\",\"Céline Rimbaud\",\"Opens like a fancy spa (that's the lavender), then settles into a powdery iris with a similarity to Guerlain Shalimar or Babycat. Unexpected and unique. Fades to a soft, muted vanilla, still powdery — so elegant and well-blended. This one smells fancy.\",9,\"\",\"\"]",
  "[\"2026-03-11\",\"\",\"Guerlain Pêche Mirage\",\"Peaches and bandaids, fascinating and not sweet but resinous — surprisingly, for something fruity. Guerlain never misses.\",8,\"\",\"\"]",
  "[\"2026-03-12\",\"\",\"Liis Floating\",\"Soft peach fresh laundry — doesn't last all day but it's airy and light and pretty.\",null,\"\",\"\"]",
  "[\"2026-03-13\",\"\",\"Lolita Lempicka L'Original\",\"a favorite\",10,\"\",\"\"]",
  "[\"2026-03-13\",\"\",\"Maison Crivelli Iris Malikhan\",\"Syrupy iris, dirty and rooty but caramelized — very interesting, odd, not pretty but unique. Possibly too gourmand, cloying.\",4,\"\",\"\"]",
  "[\"2026-03-13\",\"\",\"Chanel Jersey\",\"Soft powdery lavender with green rootiness. Going to let this one develop.\",8,\"\",\"\"]",
  "[\"2026-03-13\",\"\",\"Chanel Beige\",\"Freesias and honey, but rounded and not sharp or screechy or pissy as honey sometimes can be. Chanel is good and fancy. Both of these are very office safe. Bubble bath. 80s downtown Santa Cruz freesia bubble bath.\",8,\"\",\"\"]",
  "[\"2026-03-14\",\"\",\"Gucci Ylang Ambrato\",\"Root beer that immediately turned into Baccarat Rouge 540. Do not like. Makes me feel greasy, too masculine. Shaving cream and toasted marshmallows.\",null,\"\",\"\"]",
  "[\"2026-03-15\",\"\",\"Loewe Iris Root\",\"rich iris, smells expensive, Persie spilled the whole container so I had to buy a new decant\",9,\"\",\"\"]",
  "[\"2026-03-15\",\"\",\"Ffern Spring 25\",\"fresh\",10,\"\",\"\"]",
  "[\"2026-03-16\",\"\",\"Diptyque Fleur de Peau\",\"Alcohol, jalapeños, wood, then nothing.\",null,\"\",\"\"]",
  "[\"2026-03-17\",\"\",\"Byredo Black Saffron\",\"Fruity leather, similar to Animalique but more masculine.\",null,\"\",\"\"]",
  "[\"2026-04-22\",\"\",\"Diptyque Eau Rose EDT\",\"Like fresh rose, a little Little Flower. Really good.\",9,\"\",\"\"]",
  "[\"2026-06-07\",\"Le Labo\",\"Another 13\",\"\",10,\"\",\"You smell good- really good\"]",
  "[\"2026-07-18\",\"Diptyque\",\"Eau de Tarocco\",\"Longevity was not great, but this is a beautiful citrus with a musky dry down. Overspray/spray on clothes for greatest effect.\",9,\"\",\"\"]",
  "[\"2026-08-27\",\"Chanel\",\"N° 5\",\"Would have been a 10 but for the terrible longevity- aldehydes give it a bright, floral opening that is light and feminine, and then it dries down to a powdery amber. A classic for a reason.\",8.5,\"EDT\",\"\"]"
 ],
 "patches": [
  {
   "fp": "[\"2025-11-19\",\"Penhaligon's\",\"Penhaligon's Changing Constance\",\"Caramel and vanilla, not too sweet or cloying. Tobacco in the background of the opening — maybe a unisex vanilla. I liked this but it was the same all day and didn't last long. I'd wear it again.\",7,\"\",\"\"]",
   "set": {
    "safeReaction": "very negative"
   }
  },
  {
   "fp": "[\"2025-11-21\",\"Penhaligon's\",\"Highgrove Bouquet\",\"Floral with the same bubble bath note as Diptyque Violette or The Favourite — is it mimosa? Sweet floral with some photorealistic notes, pleasant and powdery. Trevor says old lady. Sophisticated.\",6,\"\",\"\"]",
   "set": {
    "safeReaction": "mentioned"
   }
  },
  {
   "fp": "[\"2025-11-23\",\"\",\"Penhaligon's A Kiss of Bliss\",\"Big sweet matcha opening drying down to a white musk — love this one. A more complex Juliette Has a Gun with a green tea note. Trevor says \\\"classic.\\\"\",8,\"\",\"\"]",
   "set": {
    "safeReaction": "mentioned"
   }
  },
  {
   "fp": "[\"2025-11-26\",\"Penhaligon's\",\"Liquid Love\",\"Trevor does not like it, I have a headache. It's not bad, it's interestingly spicy. Probably not a repeat. Dries down to a bland rose smell. Better ways to wear rose notes for sure. Duchess Rose is better.\",7,\"\",\"\"]",
   "set": {
    "safeReaction": "mentioned"
   }
  },
  {
   "fp": "[\"2025-12-07\",\"Le Labo\",\"Bergamote 22\",\"Trevor said \\\"hm interesting\\\" which seems bad. A white floral citrus that is pretty average and inoffensive. Poor longevity. Unremarkable.\",5,\"\",\"\"]",
   "set": {
    "safeReaction": "mentioned"
   }
  },
  {
   "fp": "[\"2025-12-14\",\"Gucci\",\"1921\",\"Beautiful chypre, citrus, neroli and oak moss. Not a ton of longevity. Trevor thinks it's ok.\",null,\"\",\"\"]",
   "set": {
    "safeReaction": "mentioned"
   }
  },
  {
   "fp": "[\"2025-12-18\",\"Gucci\",\"Tears of Iris\",\"Smells like sweet carrots. Sweet, earthy, root-y, violet-y iris. Starts to get more powdery and violet-y and creamy as it dries, like old lipstick. Delicate and pretty. Maybe a little spice from the sandalwood in the drydown. Trevor says VERY old lady — \\\"smells like an old receptionist at a dentist office who LOVES wearing perfume.\\\" Settled down to a sweet and quiet scent.\",7,\"\",\"\"]",
   "set": {
    "safeReaction": "mentioned"
   }
  },
  {
   "fp": "[\"2025-12-23\",\"Gucci\",\"The Eye of the Tiger\",\"Rich, ambery, comforting vanilla. I loved this one, although it wasn't extraordinary, just nice. No comment from Trevor — silence is complicity.\",8,\"\",\"\"]",
   "set": {
    "safeReaction": "mentioned"
   }
  },
  {
   "fp": "[\"2025-12-25\",\"Gucci\",\"Muschio di Luce\",\"Trevor says old lady. I still think it's creamy and cozy.\",7,\"\",\"\"]",
   "set": {
    "safeReaction": "mentioned"
   }
  },
  {
   "fp": "[\"2025-12-30\",\"Le Labo\",\"Santal 33\",\"I was sleeping on this one. Familiar because it was ubiquitous and frequently duplicated, but this was sweeter than I expected and not pickle-y. Trevor liked it. A winner.\",8,\"\",\"\"]",
   "set": {
    "safeReaction": "positive"
   }
  },
  {
   "fp": "[\"2026-01-03\",\"Amouage\",\"Guidance\",\"Loud opening, sweet maraschino cherries and pickles, floral laundry detergent. A little spicy, a little like a plastic doll from the 80s. What IS this? It's like fruit punch. Nutty. Official notes: pear, olibanum, hazelnut at the top; osmanthus, rose, jasmine sambac, saffron in the middle; sandalwood, vanilla, ambergris, labdanum, akigalawood at the base. Definitely dries down to apricot (osmanthus) and saffron pretty quickly. Trevor was grossed out and made me scrub it. It's going to be on my sweater forever.\",5,\"\",\"\"]",
   "set": {
    "safeReaction": "very negative"
   }
  },
  {
   "fp": "[\"2026-01-09\",\"Maison Francis Kurkdjian\",\"Absolue de Matin\",\"Powdery citrus rind — fresh, not sweet, very soft, very safe. Consequently a bit boring. Smells just like Nivea cream.\",6,\"\",\"\"]",
   "set": {
    "safeReaction": "mentioned"
   }
  },
  {
   "fp": "[\"2026-01-14\",\"Diptyque\",\"Eau de Sens\",\"A bitter, powdery citrus. It's pleasant and inoffensive enough. Actually smells like carpet deodorizer. Drydown is so faint. Trevor might like this but it isn't anything special.\",6,\"\",\"\"]",
   "set": {
    "safeReaction": "mentioned"
   }
  },
  {
   "fp": "[\"2026-01-17\",\"Byredo\",\"La Tulipe\",\"Fresh green clean modern floral. Pretty, low projection, inoffensive, beautiful floral opening, creamier in the drydown. Meets expectations but not exciting. A lot of vetiver in the drydown.\",7,\"\",\"\"]",
   "set": {
    "safeReaction": "very negative"
   }
  },
  {
   "fp": "[\"2026-01-21\",\"The Body Shop\",\"White Musk EDP\",\"This is exactly what I was looking for — lasts all day, smells amazing, irritates my lungs like crazy. If I had a sweet single note raspberry, I could layer it and hit that scent memory.\",8,\"\",\"\"]",
   "set": {
    "concentration": "EDP"
   }
  },
  {
   "fp": "[\"2026-01-24\",\"Guerlain\",\"La Petite Robe Noire\",\"Insolence DNA, pretty cherry. A Shirley Temple of a perfume.\",8.5,\"\",\"\"]",
   "set": {
    "concentration": "EDP"
   }
  },
  {
   "fp": "[\"2026-03-01\",\"Miu Miu\",\"Miu Miu Bleue\",\"All the Miu Miu DNA is the same — airy light lily of the valley — but I love them that way. Sparkling citrus, unobtrusive.\",8,\"\",\"\"]",
   "set": {
    "concentration": "EDP"
   }
  },
  {
   "fp": "[\"2026-03-03\",\"Diptyque\",\"Orphéon EDT\",\"Signature material. Lasts all day, powdery sharp citrus.\",10,\"\",\"\"]",
   "set": {
    "concentration": "EDT"
   }
  },
  {
   "fp": "[\"2026-03-05\",\"Diptyque\",\"Orphéon EDP\",\"I just love Orphéon.\",10,\"\",\"\"]",
   "set": {
    "concentration": "EDP"
   }
  },
  {
   "fp": "[\"2026-04-02\",\"Diptyque\",\"Orphéon EDT\",\"\",10,\"\",\"\"]",
   "set": {
    "concentration": "EDT"
   }
  },
  {
   "fp": "[\"2026-04-22\",\"Diptyque\",\"Eau Rose EDT\",\"Pretty, light, airy, photorealistic rose that dries down to soft, soft powder. In the same category as Liis floating, Peau de Peche and Little Flower. Feminine and delicate. I like this one a lot. Not *interesting* but not boring or bad, just fresh.\",8,\"\",\"Neutral- He didn't mention it.\"]",
   "set": {
    "rating": 9,
    "notes": "Pretty, light, airy, photorealistic rose that dries down to soft, soft powder. In the same category as Liis floating, Peau de Peche and Little Flower. Feminine and delicate. I like this one a lot. Not *interesting* but not boring or bad, just fresh. Like fresh rose, a little Little Flower. Really good."
   }
  },
  {
   "fp": "[\"2026-06-07\",\"Le Labo\",\"Another 13\",\"\",10,\"EDP\",\"\"]",
   "set": {
    "safeReaction": "You smell good- really good"
   }
  },
  {
   "fp": "[\"2026-04-20\",\"Diptyque\",\"Volutes\",\"Volutes is like an incense licorice- really pretty and softens later. Love this, so resinous.\",9,\"EDT\",\"Didn't smell it\"]",
   "set": {
    "concentration": "EDP",
    "perfumeId": 595,
    "fuzzy": false,
    "rating": 10,
    "notes": "Volutes is like an incense licorice- really pretty and softens later. Love this, so resinous. Amazing, incredible — anise and rich resinousness. Loved this."
   }
  },
  {
   "fp": "[\"2026-07-18\",\"Diptyque\",\"L’eau de tarocco\",\"9 and not 10 because it’s very faint, but it’s a perfect citrus musk- lovely. A little underlying spice but not much, juicy grapefruit and blood orange and lemon. Drydown is beautiful.\",9,\"\",\"\"]",
   "set": {
    "notes": "9 and not 10 because it’s very faint, but it’s a perfect citrus musk- lovely. A little underlying spice but not much, juicy grapefruit and blood orange and lemon. Drydown is beautiful. Longevity was not great, but this is a beautiful citrus with a musky dry down. Overspray/spray on clothes for greatest effect."
   }
  }
 ],
 "keep": {
  "[\"2026-06-16\",\"Diptyque\",\"Fleur de Peau\",\"\",10,\"EDP\",\"\"]": 1,
  "[\"2026-06-16\",\"Diptyque\",\"Orphéon\",\"\",10,\"EDT\",\"\"]": 1
 }
};
