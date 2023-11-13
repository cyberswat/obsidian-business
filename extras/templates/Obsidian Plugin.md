<%*
let title = tp.file.title
if (title.startsWith("Untitled")) {
  title = await tp.system.prompt("Title");
  await tp.file.rename(`${title}`);
  await tp.file.move("/notes/obsidian/plugins/" + title)
}
%>---
date: <% tp.file.creation_date("YYYY-MM-DD") %>
name: <%* tR += title %>
description: 
source: 
author:  
documentation: 
weight: 0
map: "[[Obsidian MOC]]"
tags:
  - obsidian/plugin/<% title.replace(/ /g, '') %>
---
# 🔌 <%* tR += title %> 🔌


