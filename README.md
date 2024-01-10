# Running the project
From a ubuntu command line:
Install nodejs and npm
`sudo apt-get install nodejs npm`

Initialize `npm` in project folder
`npm install`

Run server
`npm start`

Server running on `localhost:3000`

# Test project
Download Postman: [Download Postman | Get Started for Free](https://www.postman.com/downloads/)

Send `POST` via Postman to `localhost:3000/emails` development server or
https://email-forwarder-o9vk.onrender.com/emails

With `JSON` body:
```json
{
	"to":  "name@example.com",
	"subject":  "hi",
	"body":  "Hello World!"
}
```
Check mailbox for email