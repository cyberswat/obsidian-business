---
description: This is a homepage that surfaces recent activity and navigation maps.
---
# 🏠 Home 🏠
- [Files created today](Home.md#Files%20created%20today)
- [Files modified today](Home.md#Files%20modified%20today)
- [Atlas](Home.md#Atlas)

# Activity
***
## Files created today
[⬆️](Home.md#🏠%20Home%20🏠)
```dataview
Table file.etags AS Tags, description AS Description
FROM ""
WHERE file.cday = date("today")
SORT file.ctime asc
```
***
## Files modified today
[⬆️](Home.md#🏠%20Home%20🏠)
```dataview
TABLE 
file.etags AS Tags, description AS Description 
FROM "" 
WHERE file.mday = date("today") 
SORT file.mtime asc
```
***
## Atlas 
[⬆️](Home.md#🏠%20Home%20🏠)
In the labyrinth of my mind, thoughts weave and intertwine, creating a tapestry of consciousness as unique as the neural pathways that connect them. An atlas, like a mystical mapmaker, illuminates the way through these cerebral constellations, unveiling the intricate patterns and celestial gatherings of ideas. Without such a guiding star, navigating the cosmos within could lead to a voyage adrift in the endless expanse of the unknown.

```dataview 
TABLE description from #map 
sort weight ASC
```
***