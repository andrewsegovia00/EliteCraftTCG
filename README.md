# :new: Elite Craft TCG - (Final Capstone Project)

## Description:

Welcome to Elite Craft TCG, your ultimate Trading Card Game hub dedicated to Pokemon enthusiasts! Dive into the exciting world of trading cards, where you can explore card lists from both current and past booster packs. But there's more to it than just exploring. 

Take your TCG skills to the next level by crafting your very own decks, by combining cards that synergize to perfection. Share your creative decks with the community and discover decks curated by other users!

Exciting Upcoming Features:
Version 2.0: Engage with your favorite decks through comments and likes. Get better by hearing feedback from the community, and crafting decks to defeat the meta."


## Technologies Used:

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Node.Js](	https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white) ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![VScode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Getting Started

Here's a live link to Elite Craft TCG: [Live Link](https://tcgelitecraft-f9a09cc950a9.herokuapp.com/)

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

## Logic Behind Travel Bud
```ejs
<div id="deleteJourneyShowModal" class="hide">
                    <form id="journeyDelete" method="POST" action="/dashboard/<%= journey._id %>?_method=DELETE">
                        <div class="popUpSpacing">
                            <div>Are you sure you want to delete this Journey?</div>
                        </div>
                        <div class="popUpBtns">
                            <button class="CancelPopUp" type="button" id="closeDeleteJourney">No</button>
                            <button class="confirmsPopUp" type="submit">Yes</button>
                        </div>
                    </form>
                </div>
```
This code snippet displays a modal pop-up for deleting a journey. Modals/PopUps that help the user are my favorite, expecially when there's a message stopping me from deleting an entry accidentally. The modal is starts as a hidden class, and an event listener queues the function that displays the moal. The form uses the POST method with a DELETE action, which allows the server to handle the deletion request when the user clicks the "Yes" button. The modal provides a warning message asking the user to confirm their intention before proceeding with the deletion. If the user clicks the "No" button, the modal is closed without any further action. The code snippet adds a layer of protection to avoid accidental deletions.

## Future Features / Icebox:
- [ ] User is able to see what percentage of their deck is Trainer, Energy, or Pokemon cards.
- [ ] Users are able to leave comments and like none-user-owned decks
- [ ] Add the older Sets before Sword and Shield
- [ ] Add search bar and filters to search for cards without the need of a set

## Below: The Wireframe of the App
[Link for Trello Board](https://trello.com/b/GEMaqcaK/flight-tracker-app)

## Wireframe 1
/src/assets/screenshotsOfProject/cardList.png
![wireframe1](/src/assets/screenshotsOfProject/wireframe1.png)

## Wireframe 2
![wireframe1](/src/assets/screenshotsOfProject/wireframe2.png)

## Wireframe 3
![wireframe1](/src/assets/screenshotsOfProject/wireframe3.png)
