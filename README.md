# Project Overview

## No Country for Old Men


## Project Description

This app will show some available gun data from the United States and other countries. Specifically, it will GET data from the [gunpolicy.org] API based on the country user selects. Data to include: 

    1. Number of privately owned firearms
    2. Rate of civilian firearm posession per 100k people
    3. Total number of gun deaths
    4. Rate of all gun deaths per 100k people
    
-There is a plethora of data available through this API, but for the purpose of this exercise I am focusing on these four data points for each country. 
-This data will be retrieved from [GunPolicy.org](http://www.gunpolicy.org) through their [API](http://www.gunpolicy.org/api).


## API and Data Sample

"GunPolicy.org: International firearm injury prevention and policy"
Base URL of the API I'm using is https://www.gunpolicy.org

This particular query shows the [countries with available data](https://www.gunpolicy.org/index.php?option=com_api&app=gpodatapage&clientid=267&key=69ac9405b94c3b1f632641d48cd80745&format=raw&resource=getlocations)

{
            "id": "7",
            "location_id": "7",
            "name": "Argentina",
            "location": "Argentina",
            "type": "country",
            "iso2": "AR",
            "iso3": "ARG"
        },
	
This particular query shows the [# of annual deaths resulting from firearms in Netherlands](https://www.gunpolicy.org/index.php?option=com_api&app=gpodatapage&clientid=267&key=69ac9405b94c3b1f632641d48cd80745&resource=getcategorydata&category=total_number_of_gun_deaths&location_id=125&format=raw)

{
    "result": {
        "id": "155",
        "location_id": "125",
        "location": "Netherlands",
        "columnValue": "2018: 76{q13354}; 2017: 86; 2016: 72; 2015: 78; 2014: 74; 2013: 72; 2012: 95; 2011: 100; 2010: 76; 2009: 95; 2008: 78; 2007: 84; 2006: 82; 2005: 104; 2004: 101; 2003: 104; 2002: 122; 2001: 114; 2000: 116; 1999: 145; 1998: 131; 1997: 133; 1996: 143;",
        "columnPreamble": "In #, annual deaths resulting from firearms total ~"
    }
}


## Wireframe

[View Wireframe](https://github.com/jamesbenet/no-country-for-old-men/blob/main/untitled.pdf)

### MVP/PostMVP

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

-added CSS functionality such as mouse hover behavior and highlighting certain data

-local storage

-add additional API(s)

-add animation

-get input from UX student re: giving my app intuitive UI and design


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|April 16-18| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|April 19| Project Approval | Complete
|April 20| Core Application Structure (HTML, CSS, etc.) | Complete
|April 20| Pseudocode / actual code | Complete
|April 21| Initial Clickable Model  | Complete
|April 22| MVP | Complete
|April 23| Presentations | Incomplete

## Priority Matrix

[View Matrix](https://github.com/jamesbenet/no-country-for-old-men/blob/main/Priority%20Matrix%20Template.pdf)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|Pseudocode(site planning/implementation) | M  | 3 hr | 2hr    |    |
|HTML structure (basic design/requirements) | M  | 2hr | 2hr    |    |
|CSS + flexbox (site layout/appearance) | L  | 2 hr | 2hr    |    |
|Working w/ API-working with data  | H  | 2hr | 4hr    |    |
|Working w/ API-javascript | H  | 3 hr | 2hr    |    |
|Working w/ API-improve data/presentation | H  | 3hr | 2hr    |    |
|Coding (any) |  L | 3 hr | 2hr    |    |
|MVP focus (focus on overall requirements/best practices) |  H | 3hr | 2.5hr    |    |
|Troubleshooting |  M | 3hr | 2hr    |    |
| Total |  | 25hrs|  |  |20.5
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 


