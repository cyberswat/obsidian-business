<%*

let title = await tp.user.filename(tp, "What is this person's Full Name?", "/people/${output}");

let company = await tp.user.property_text(tp, "What company is this person with?");

let team = await tp.user.property_text(tp, "What team is this person on?");

let location = await tp.user.property_text(tp, "Where is this person located?");

let tags = await tp.user.property_tags(tp, "Do you have any tags you would like to add to this Note?", "people/" + title);

let weight = await tp.user.property_number(tp, "Enter a weight if you would like to increase it from 0.", 0);

let newDateString = tp.user.date_change(tp.file.creation_date("YYYY-MM-DD"), 14);

%>---
created: <% tp.file.creation_date("YYYY-MM-DD") %>
company: <% company %>
description: "A note that describes <%* tR += title %>"
map: "[[People MOC]]"
team: <% team %>
location: <% location %>
tags: <% tags %>
weight: <% weight %>
---
![300](person.png)
# Tasks
- [ <%* tR += "] #" %><% tp.user.tag("people/" + title) %> Add an image in the `extras/images/people` folder and reference it here. 📅 <% newDateString %>
- [ <%* tR += "] #" %><% tp.user.tag("people/" + title) %>  Setup a recurring meeting to chat. 📅 <% newDateString %>
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
