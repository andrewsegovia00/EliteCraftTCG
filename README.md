# :new: Elite Craft TCG - (Final Capstone Project)

## Description:

Welcome to Elite Craft TCG, your ultimate Trading Card Game hub dedicated to Pokemon enthusiasts! Dive into the exciting world of trading cards, where you can explore card lists from both current and past booster packs. But there's more to it than just exploring. 

Take your TCG skills to the next level by crafting your very own decks, by combining cards that synergize to perfection. Share your creative decks with the community and discover decks curated by other users!

Exciting Upcoming Features:
Version 2.0: Engage with your favorite decks through comments and likes. Get better by hearing feedback from the community, and crafting decks to defeat the meta.


## Technologies Used:

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Node.Js](	https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white) ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![VScode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Getting Started

Here's a live link to Elite Craft TCG: [Live Link](https://tcgelitecraft-f9a09cc950a9.herokuapp.com/)

[Link to Trello Board](https://trello.com/b/GEMaqcaK/flight-tracker-app)

[Link to ERD](https://lucid.app/lucidchart/2e1d2567-d800-48d3-97b6-f580603457ee/edit?invitationId=inv_7643d9f3-9a51-4eeb-ad72-5014707bc0d1)

[Link to Wireframe](https://whimsical.com/elitecrafttcg-4kEEEA9tQ1ErDWD2f2iSRS)

Want to see how it works by deploying it locally? Here's what you'll need to do:

Fork or Clone the repository: Start by copying the project's GitHub repository link and run the following command:

```
git clone https://github.com/andrewsegovia00/EliteCraftTCG.git
```

Install Dependencies: Navigate to the project directory and install the required dependencies by running the following command:

```
npm install
```
Set up Environment Variables: Create a .env file in the root directory of the project and set the following environment variables:

```
SECRET=your_secret_key
MONGODB_URI=your_mongodb_uri
```

Start the Server: Once the dependencies and environment variables are set up, start the server with the following command:

```
npm run dev
```
Access the Application: Elite Craft TCG should now be running on http://localhost:5173/. Open your web browser and visit this URL to access the application.

Sign up and Get Started!

## App Screenshots:

### Below: Home Page View
![A screenshot displaying the home page.](/src/assets/screenshotsOfProject/home.png)

### Below: Dashboard
![A screenshot displaying the dashboard of available sets.](/src/assets/screenshotsOfProject/dashboard.png)

### Below: Available Cards in a Set
![A screenshot of available cards in a booster set.](/src/assets/screenshotsOfProject/cardList.png)

## Seeding Logic
```js
(async function () {
  try {
    const sets = await pokemon.set.all({ q: 'id:dp' });
    for (const set of sets) {
        const createdSet = await Set.create({
            name: set.name,
            set_id: set.id,
            imageUrl: set.images.logo,
            totalCards: set.total,
            legality: {
                standard: set.legalities.standard ? 'Legal' : '',
                expanded: set.legalities.expanded ? 'Legal' : '',
                unlimited: set.legalities.unlimited ? 'Legal' : '',
            },
            cards: [],
        });
      for (let j = 0; j < set.total; j++) {
        const cardData = await pokemon.card.find(`${set.id}-${j + 1}`);
        const createdCard = await Card.create({
          name: cardData.name ? cardData.name : 'unknown',
          imageUrl: cardData.images.large ? cardData.images.large : 'unknown',
          number: cardData.number ? cardData.number : 'unknown',
          set: set.name ? set.name : 'unknown',
          typeImg: cardData.types ? cardData.types : 'unknown',
          legality: {
            standard: cardData.standard ? 'Legal' : '',
            expanded: cardData.expanded ? 'Legal' : '',
            unlimited: cardData.unlimited ? 'Legal' : '',
          },
          set_id: set._id,
        });
```
This code snippet displays a seeding document used to fill our db with pokemon cards from the quered set. Thanks to this IIFE we're able to call the Pokemon API and await for the booster sets that match our query. Since there are multiple sets with the same 'generation' in this case 'dp' being 'Diamond and Pearl' We're able to also create cards with the same function. Although it's a loop within a loop, we're able to create sets and cards at the same time. Shortening the seeding time.

## Below: The Wireframe of the App

## Wireframe 1
![wireframe1](/src/assets/screenshotsOfProject/wireframe1.png)

## Wireframe 2
![wireframe1](/src/assets/screenshotsOfProject/wireframe2.png)

## Wireframe 3
![wireframe1](/src/assets/screenshotsOfProject/wireframe3.png)


## Future Features / Icebox:
- [ ] User is able to see what percentage of their deck is Trainer, Energy, or Pokemon cards.
- [ ] Users are able to leave comments and like none-user-owned decks
- [ ] Add the older Sets before Sword and Shield
- [ ] Add search bar and filters to search for cards without the need of a set
