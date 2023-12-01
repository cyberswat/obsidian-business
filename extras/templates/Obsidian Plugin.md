<%*

let title = await tp.user.filename(tp, "What is the name of this plugin?", "/projects/obsidian/plugins/${output}");

let description = await tp.user.property_text(tp, "Write an optional description of this Plugin's metadata.");

let source = await tp.user.property_text(tp, "Provide a link to the GitHub repository of this plugin.");

let author = await tp.user.property_text(tp, "Provide a link to the GitHub profile of this plugin's author.");

let documentation = await tp.user.property_text(tp, "Provide a link to this plugin's documentation.");

let tags = await tp.user.property_tags(tp, "Do you have any tags you would like to add to this Plugin?", "obsidian/plugin/" + title);

let weight = await tp.user.property_number(tp, "Enter a weight if you would like to increase it from 0.", 0);

%>---
date: <% tp.file.creation_date("YYYY-MM-DD") %>
name: <% title %>
description: <% description %>
source: <% description %>
author:  <% author %>
documentation: <% documentation %>
weight: <% weight %>
map: "[[Obsidian MOC]]"
tags: <% tags %>
---
# 🔌 <%* tR += title %> 🔌
<% tp.file.cursor() %>


