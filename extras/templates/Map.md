<%*
let title = tp.file.title
if (title.startsWith("Untitled")) {
  title = await tp.system.prompt("Title");
  title = title.replace(/[^\w-]/g, '') + " MOC"
  
  let filename = "/atlas/maps/" + title + ".md"
  let fileExists = await tp.file.exists(filename);
  
  while (fileExists) {
    title = await tp.system.prompt(filename + " already exists, try another.");
    title = title.replace(/[^\w-]/g, '') + " MOC"
    filename = "/atlas/maps/" +  title + ".md"
    fileExists = await tp.file.exists(filename);
  }

  await tp.file.rename(`${title}`);
  await tp.file.move("/atlas/maps/" + title)
}

let date = tp.file.creation_date("YYYY-MM-DD")

let description = await tp.system.prompt("Provide a short metadata description.");
description = description.replace(/["]+/g, '\\"')

let tags = "map/" + title.replace(/[^\w-\/]/g, '')
tags = await tp.system.prompt("List tags delineated by spaces. You can use Letters, Numbers, Underscore (_), Hyphen (-), and Forward slash (/) for Nested tags.", tags);
tags = tags.replace(/[^\w\s-\/]/g, '')

let query = "dataview \nTABLE team, company from #projects \nsort company, team, weight, file.name ASC"
query = await tp.system.prompt("Query time. <a href=foo>foo</a>", query, false, true);

%>---
create: <% date %>
description: "<% description %>"
atlas: "[[Home]]"
weight: 0
tags:
  - <% tags %>
---
# 🗺️ <% title %> 🗺️
```dataview 
TABLE team, company from #projects   
sort company, team, weight, file.name ASC
```
