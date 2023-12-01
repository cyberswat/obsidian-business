<%*

let title = await tp.user.filename(tp, "What is the title for this map?", "/atlas/maps/${output} MOC");

let description = await tp.user.property_text(tp, "Write an optional description of this Map's metadata.");

let tags = await tp.user.property_tags(tp, "Do you have any tags you would like to add to this Note?", title);

let weight = await tp.user.property_number(tp, "Enter a weight if you would like to increase it from 0.", 0);

%>---
create: <% tp.file.creation_date("YYYY-MM-DD") %>
description: <% description %>
atlas: "[[Home]]"
tags: <% tags %>
weight: <% weight %>
---
# 🗺️ <% title %> 🗺️
<% tp.file.cursor() %>
```dataview 
TABLE team, company from #projects   
sort company, team, weight, file.name ASC
```
