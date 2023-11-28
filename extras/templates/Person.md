<%*
let title = tp.file.title;
if (title.startsWith("Untitled")) {
  title = await tp.system.prompt("What is this person's Full Name?");

  // Check if the file already exists
  let filePath = "/people/" + title + ".md";
  let fileExists = await tp.file.exists(filePath);

  if (fileExists) {
    alert("A file with this name already exists.");
    return;
  } else {
    await tp.file.rename(title);
    await tp.file.move(filePath);
  }
}
let company = await tp.system.prompt("What company is this person with?");
company ??= '';
let team = await tp.system.prompt("What team is this person on?");
team ??= '';
let location = await tp.system.prompt("Where is this person located?");
location ??= '';

let dateString = tp.file.creation_date("YYYY-MM-DD");
let date = new Date(dateString);

// Add two weeks (14 days) to the date
date.setDate(date.getDate() + 14);

// Formatting the new date back to "YYYY-MM-DD" format
let year = date.getFullYear();
let month = date.getMonth() + 1; // getMonth() is zero-based
let day = date.getDate();

// Ensure the month and day are in two-digit format
month = month < 10 ? '0' + month : month;
day = day < 10 ? '0' + day : day;

let newDateString = `${year}-${month}-${day}`;
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
- [ <%* tR += "] #" %>people/<% title.replace(/ /g, '') %> Add an image in the `extras/images/people` folder and reference it here. 📅 <% newDateString %>
- [ <%* tR += "] #" %>people/<% title.replace(/ /g, '') %> Setup a recurring meeting to chat. 📅 <% newDateString %>
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
