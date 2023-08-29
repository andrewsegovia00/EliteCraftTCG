# :new: Elite Craft TCG
### Final Capstone Project

## Description:

Welcome to Elite Craft TCG, your ultimate Trading Card Game hub dedicated to Pokemon enthusiasts! Dive into the exciting world of trading cards, where you can explore card lists from both current and past booster packs. But there's more to it than just exploring. 

Take your TCG skills to the next level by crafting your very own decks, by combining cards that synergize to perfection. Share your creative decks with the community and discover decks curated by other users!

Exciting Upcoming Features:
Version 2.0: Engage with your favorite decks through comments and likes. Get better by hearing feedback from the community, and crafting decks to defeat the meta."


## Technologies Used:

![JavaScript](https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![React](https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png) ![Node.Js](https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png) ![Vite](https://github.com/marwin1991/profile-technology-icons/assets/62091613/b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35) ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white) ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![VScode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Getting Started

Here's a live link to get the fastest access to the app: [Live Link](https://tcgelitecraft-f9a09cc950a9.herokuapp.com/)

Want to deploy it locally? No problem! Here's a guide:

Clone the repository: Start by cloning this GitHub repository to your local machine using the following command:

```
git clone https://github.com/your-username/travel-bud.git
```

Install Dependencies: Navigate to the project directory and install the required dependencies by running the following command:

```
npm install
```
Set up Environment Variables: Create a .env file in the root directory of the project and set the following environment variables:

```
SECRET=your_secret_key
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_SECRET=your_google_secret
GOOGLE_CALLBACK=your_google_callback_url
```

Start the Server: Once the dependencies and environment variables are set up, start the server with the following command:

```
npm start
```
Access the Application: Travel Bud should now be running on http://localhost:3000/. Open your web browser and visit this URL to access the application.

Sign In and Get Started: Travel Bud provides Google OAuth for user authentication. Click on the "LOG IN" button on the top-right corner of the navigation bar to sign in with your Google account. Once signed in, you can start creating and managing your travel budgets and expenses.

Explore and Enjoy: Now you're all set to explore Travel Bud's features and enjoy a seamless and organized travel planning experience. Happy traveling!

## App Screenshots:

### Below: Home Page View
![A screenshot displaying the home page.](/public/images/homePage.png)

### Below: Personal Trip Entries
![A screenshot displaying the dashboard of your personal trip.](/public/images/personalTripView.png)

### Below: Adding an Expense
![A screenshot displaying the user flow to add an expense.](/public/images/addingExpense.png)

### Below: Deleting a Journey
![A screenshot showing the sad moment the user decides to delete a journey](/public/images/deletinJourney.png)


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
- [ ] Add mobile-responsive design.
- [ ] Add the ability to share your journeys and forecasted budgets with friends ad loved ones.
- [ ] Request a travel API to populate the homepage with popular destination and more details about the location.
- [ ] Add the ability to add another user to the same journey and share expenses and costs belonging to a user.

## Below: The Wireframe of the App
[Link for Trello Board](https://trello.com/b/GEMaqcaK/flight-tracker-app)

## Wireframe 1
![wireframe1](/public/images/wireframe_1.png)

## Wireframe 2
![wireframe1](/public/images/wireframe_2.png)

## Wireframe 3
![wireframe1](/public/images/wireframe_3.png)

## Wireframe 4
![wireframe1](/public/images/wireframe_4.png)