# Project Overview

## Project Name
No Country for Old Men

## Project Description

This app will show available gun data of US and some other developed countries, data to include: 
    number of privately owned firearms, 
    rate of civilian firearm posession per 100k people, 
    total number of gun deaths, 
    rate of all gun deaths per 100k people.
    
    Data comes from gunpolicy.org


## API and Data Sample

Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need
Base URL of the API I'm using is https://www.gunpolicy.org

This particular query shows the countries with available data:
https://www.gunpolicy.org/index.php?option=com_api&app=gpodatapage&clientid=267&key=69ac9405b94c3b1f632641d48cd80745&format=raw&resource=getlocations

{
            "id": "7",
            "location_id": "7",
            "name": "Argentina",
            "location": "Argentina",
            "type": "country",
            "iso2": "AR",
            "iso3": "ARG"
        },
	
This particular query shows the # of annual deaths resulting from firearms in Netherlands:
https://www.gunpolicy.org/index.php?option=com_api&app=gpodatapage&clientid=267&key=69ac9405b94c3b1f632641d48cd80745&resource=getcategorydata&category=total_number_of_gun_deaths&location_id=125&format=raw

{
    "result": {
        "id": "155",
        "location_id": "125",
        "location": "Netherlands",
        "columnValue": "2018: 76{q13354}; 2017: 86; 2016: 72; 2015: 78; 2014: 74; 2013: 72; 2012: 95; 2011: 100; 2010: 76; 2009: 95; 2008: 78; 2007: 84; 2006: 82; 2005: 104; 2004: 101; 2003: 104; 2002: 122; 2001: 114; 2000: 116; 1999: 145; 1998: 131; 1997: 133; 1996: 143;",
        "columnPreamble": "In #, annual deaths resulting from firearms total ~"
    }
}


## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

-Readme file with my project's worksheet, a link to the live site and other pertinent info.

-Find an external API, read the documentation available and make sure it's usable.

-Build site to display data using HTML, CSS and Javascript.

-Style with Flexbox or Grid.

-Make a GET request with axios to retrieve external data from API and insert some of the retrieved data my site's DOM.

-Implemenet responsive design on my site, so that it will be presentable on a tablet/cellphone (at least one) as well as laptop.

-Host my site on a free hosting service such as Github pages.

#### PostMVP  
-Add more pertinent data; my goal in MVP is to present 4 data points for each country but I could add more countries and data points

-add graphs/pictures to improve presntation of my site


## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|April 16-18| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|April 19| Project Approval | Incomplete
|April 20| Core Application Structure (HTML, CSS, etc.) | Incomplete
|April 20| Pseudocode / actual code | Incomplete
|April 21| Initial Clickable Model  | Incomplete
|April 22| MVP | Incomplete
|April 23| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |
|Pseudocode |   | 1hr |     |    |
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
