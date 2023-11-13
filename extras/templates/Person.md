<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
    await tp.file.move("/people/" + title)
  }
%>---
address:
birthday:
created: <% tp.file.creation_date("YYYY-MM-DD") %>
company:
description: "A note that describes <%* tR += title %>"
email:
map: "[[People MOC]]"
phone:
team:
tags: 
 - " <%* tR += "#" %>people/<% title.replace(/ /g, '') %>"
weight: 0
---
⬆️ [[People MOC]] ⬆️
- [ <%* tR += "] #" %>setup Update file properties.
- [ <%* tR += "] #" %>setup Add an image for <% title.substring(0, title.indexOf(' ')) %> in the `extras/images/people` folder or remove the default.
![300](person.png)
***
### Inbox
```tasks
not done
tags include <%* tR += "#" %>people/<% title.replace(/ /g, '') %> 
no due date
limit 10
```
***
- [ <%* tR += "] #" %>setup Add a todoist project.
```button
name Todoist <%* tR += `${title}` %>
type link
action https://todoist.com/app/projects/active
```
```todoist
{
"name": "Overdue",
"filter": "overdue & #<%* tR += `${title}` %>",
"group": false
}
```
```todoist
{
"name": "Today",
"filter": "today & #<%* tR += `${title}` %>",
"group": false
}
```
```todoist
{
"name": "Upcoming",
"filter": "(!today & !overdue) & #<%* tR += `${title}` %>",
"group": false
}
```
***
 ```dataview 
TABLE description, created from <%* tR += "#" %>people/<% title.replace(/ /g, '') %>
sort created
```
