# Garden Party

![Garden Party](https://imgur.com/S2hZ5iU.png)

### About

Garden Party is a garden planning app. You can create garden plots and select from pre-populated flowers to fill your garden. You can then see a month-by-month view to ensure your garden is in bloom across the seasons.

Flower data was collated by me and added to the database. It can be read by the user but not updated. A reference to selected flowers is stored in the garden plot resource.

Flower data is based on gardens in Eastern Massachusetts. Please note that bloom and planting times may be different in different parts of the country.

### Technologies

* Express
* MongoDB
* Mongoose
* Node.js

### Process

I created the basic CRUD routes, and tested them using Postman. I did make frequent changes to the plant model, as I was constantly realizing I needed it to display data in specific ways that I hadn't anticipated initially.

### Catalog of Routes

#### Authentication

**Method**|**URL**
:-----:|:-----:
POST|/sign-up
POST|/sign-in
PATCH|/change-password
DELETE|/sign-out

#### GardenPlots

**Method**|**URL**
:-----:|:-----:
GET|/gardenPlots
GET|/gardenPlots/:id
POST|/gardenPlots
PATCH|/gardenPlots/:id
DELETE|/gardenPlots/:id

#### Plants
**Method**|**URL**
:-----:|:-----:
GET|/plants
GET|/plants/:id
POST|/plants
PATCH|/plants/:id
DELETE|/plants/:id

### ERD

![](https://imgur.com/a/EbN2IZc.png)

### Unsolved problems

I initially had in mind user created plants, in addition to the ones I seeded. This can be seen in my ERD I used for planning. I ended up deciding I needed too much information from the user for this to be practical, but at some point I'd like to add that back in.
I'd like to integrate with external APIs to get the weather, and to show pictures of the flowers in the database.
I'd like to potentially make some custom routes, such as to display a random flower from the database.

### Set up and Installation

Clone the repo, and npm install.

### Links

[Garden Party App](https://jennifergodley.com/garden-frontend/)

[backend deployed](https://garden-party-project.herokuapp.com)

[frontend repo](https://github.com/jennygodley/garden-frontend)
