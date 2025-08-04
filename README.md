****Clone the GitHub Repository****
Open your terminal and run:
git clone https://github.com/beauty-kumari02/SheCanFoundation.git
***Navigate into the Project Folder****
cd SheCanFoundation
****Install All Required npm Packages using the command****
npm install
***Set Up MongoDB Cloud****
Go to MongoDB Atlas.
Create an account (or log in).
Create a new project.
Create a cluster.
Set up a database user with a username and password.
Whitelist your IP or allow access from anywhere (0.0.0.0/0).(you will net the network access in the left bar section of mongoDB website)
Create a .env File in the Root Directory
****Add the following content:****
USERNAME=<your-username>
PASSWORD=<your-password>
DATABASE_URL=mongodb+srv://<your-username>:<your-password>@user.vifow5w.mongodb.net/?retryWrites=true&w=majority&appName=User
****Start the Server with nodemon****
nodemon app.js
****Open the Website in Browser****
Go to:
http://localhost:8080/
