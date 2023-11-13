<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
    await tp.file.move("/projects/" + title + "/" + title + " Charter")
  } 
  let description = await tp.system.prompt("Provide a short metadata description.");
%>---
created: <% tp.file.creation_date("YYYY-MM-DD") %>
description: "<% description.replace(/['"]+/g, '') %>"
name: "<%* tR += title %>"
map: "[[Projects MOC]]"
tags: 
 - " <%* tR += "#" %>projects/<% title.replace(/ /g, '') %>"
weight: 0
---
# <% title %>

Project Description  
What is the purpose of the project? Define the business need.  
  
Project Objective & Deliverables  
What is the purpose of the project? Define the business need. Make sure objectives are specific, measurable, attainable, reasonable, and timely (SMART)

- Deliverable 1
    
- Deliverable 2
    
- Deliverable 3
    

  

Scope Requirements & Constraints  
What will the project deliver? What will the project exclude and why? What is the result after deliverables are met? 

  
Key Stakeholders 

|   |   |
|---|---|
|Customer or Client||
|Project Sponsor||
|Project Manager||
|Project team members||

  
Project Milestones 

|   |   |   |
|---|---|---|
||Description|Date 00/00/0000|
|Project Start|||
|Milestone 1|||
|Milestone 2|||
|Milestone 3|||
|Project Completion|||

  
Project Budget or Cost Benefit Analysis  
What are the project rough estimates? If you have information on return on investment, include in this section. 

  
Project Risks 

|   |   |
|---|---|
|Project Risks|Identify any potential risks of this project|
|Risk #1|Identify any potential risks of this project?|
|Risk #2||

  

Approval Signatures 

|   |   |   |   |   |
|---|---|---|---|---|
||||||
|Customer or Client||Project Manager||Project Sponsor|