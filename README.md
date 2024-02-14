# Project Title

Sankofa Tours


## Overview

Sankofa Tours is your number 1 go-to website for top destination sites in Africa. 

### Problem

Despite Africa's rich cultural heritage, breathtaking natural landscapes, and diverse wildlife, the continent continues to face challenges in attracting a significant number of tourists. Sankofa Tours, a leading tour company specializing in African destinations, recognizes that limited awareness and negative perceptions about tourism in Africa are hindering the industry's growth potential. Sankofa Tours aims to spearhead initiatives that promote tourism in Africa, enhance the continent's image as a desirable tourist destination, and overcome the barriers preventing potential tourists from visiting. We seek to unlock Africa's tourism potential and contribute to its sustainable development.

### User Profile
Tourist or Travel Enthusiasts:
			- Looking for their next travel destination. 
			- Explore Africa's hidden gems 
			- Indulge in authentic African cuisine and culinary delights.
### Features
- As a user, I want to be able to view all the top destination sites in Africa.
- As a user, I want to be able to see the nearest hotels and prices within that location
- As a logged-in user, I want to be able to pin my favourite destinations to my board. 
- As a user, I want to be able to see all the necessary information about that site. 
- As a user, I want to be able to view destinations based on events, festivals, spirituality and visitor's choice. 

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Front-end Libraries:
	- react
	- react-router
	- react leaflet
	- Axios
- Back-end Libraries: 
	- knex
	- express
	
### APIs
External API from **booking.com** will be used to display the hotel information within the travel destination site and **weather.com** to display current weather. 


### Sitemap
- Homepage
- Destination Sites
	- List Site
	- Detailed Page
- Surprise Me Page


### Mockups
Please refer to pdf file *(Bramstation.png)*

### Endpoints

**GET  /country**
		-	Parameters:
				-	country code: defined country code as a string.

		Response:
			[
				{ "code": "ng",
				  "country": "Nigeria",
				  "numberofsites": 10
				  }
			]
**GET /destinations**
		
		Response:			
				[
					{ "country":"Nigeria",
					  "image": "http://www.xxxxxx.com/images",
					  "site-title": "Koi Falls",
					  "description": "Visit the beautiful Koi Falls".	  	
					}
				]
**GET /destination**

		Response:
			[
				{"hero-image":"http://www.xxxxxxxxxxxxxxxxx.com",
			     "highlights": " ",
			     "visitor-information":" ",
			     "facilities&amenities": " ",
			     "booking-tour":" ",
			     "localtips":" ",
			     "contact": " "
			]
### Roadmap
-	Create front-end 
	-	react with routes,  and boilerplate pages
- Create back-end
	- express with routing, with placeholder 200 responses.
- Create APIs  & database
- Feature:
		- Create homepage using leaflet.
		- Connect to database
- Feature: 
		- Build country destination page
- Feature:
		- Build country destination details page
- Feature:
		- Create the Surprise Me overlay
- Feature: 
		- Build Surprise Me feature.
-Project Testing
-DEMO Day!

## Nice-to-haves

-	Create a login page. 
-	Create the pin board for pinning favourite sites. 
-	Create a comment section. 
-	Create a rating system. 



