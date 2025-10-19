# Events-Platform Frontend

## Project Summary:

#### This project showcases the frontend of an events app using Vite, React, and javaScript.

#### Features include the ability to view all existing events and users; the ability to create a staff account and post new events, and delete any events posted from your account. It is also possible to sign up to an event, and add it to your google calendar. 

#### It also includes the feature of checking the weather at the Location of the event - this is using the OpenWeather API. This comes with the limitation that not all locations will be able to access weather if they are not included in the API. This also requires the generation of an API key, although I have provided one for testing purposes.

#### Link to the hosted version: https://events-platform-web.netlify.app

### Clone the repo

Firstly, clone the repo to your device, using the command `git clone`.
Then, cd into the project with `cd events-platform`.
Once dependencies have been installed, run the command `npm run dev` to host locally.

#### Installations:

The project also requires the installation of 'axios', 'react', 'react-dom', 'react-router-dom', using `npm i (installation-name)`

#### API Keys:

The project requires an API key from the OpenWeather API. Go on to their website, create an account, and generate an API key. This can be stored in a file (should be gitignored), and imported into the Weather component.
