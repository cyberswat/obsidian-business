<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("What is this person's Full Name?");
    await tp.file.rename(`${title}`);
    await tp.file.move("/people/" + title)
  }
  let company = await tp.system.prompt("What company is this person with?");
  company ??= '';
  let team = await tp.system.prompt("What team is this person on?");
  team ??= '';
  let location = await tp.system.prompt("Where is this person located?");
  location ??= '';
%>---
created: <% tp.file.creation_date("YYYY-MM-DD") %>
company: <% company.replace(/['"]+/g, '') %>
description: "A note that describes <%* tR += title %>"
map: "[[People MOC]]"
team: <% team.replace(/['"]+/g, '') %>
location: <% location.replace(/['"]+/g, '') %>
tags: 
 - " <%* tR += "#" %>people/<% title.replace(/ /g, '') %>"
weight: 0
---
![300](person.png)
# Tasks
- [ <%* tR += "] #" %>people/<% title.replace(/ /g, '') %> Add an image in the `extras/images/people` folder and reference it here.
- [ <%* tR += "] #" %>people/<% title.replace(/ /g, '') %> Setup a recurring meeting to chat.
***
### Inbox
```tasks
not done
tags include <%* tR += "#" %>people/<% title.replace(/ /g, '') %> 
no due date
limit 10
```
***
 ```dataview 
TABLE description, created from <%* tR += "#" %>people/<% title.replace(/ /g, '') %>
sort created
```
