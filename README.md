# Office App

## About
This is a simple office app that allows you to manage office information. It includes features such as displaying office details and selecting office colors.

## Installation
To run the Office App, you need to have Node.js and npm (Node Package Manager) installed on your machine. Follow the steps below to install the necessary packages and run the app:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.

```bash
cd Manage_Offices
```
3. Install the required npm packages by running the following command:

``` bash
npm install
```
This will install all the dependencies specified in the package.json file.

## Running the App
Once the npm packages are installed, you can start the app and the JSON server by following these steps:

1. Run the following command to start the development server:

``` bash
npm run dev

```
This will build the app and start a local development server. You can access the app by opening your browser and navigating to http://localhost:3000.

2. In a separate terminal, start the JSON server by running the following command:

``` bash
npm run server
```
This will start the JSON server on http://localhost:5000. The server provides the necessary API endpoints for the app to fetch office data and staffs.

3. You are now ready to use the Office App! Open your browser and go to http://localhost:3000 to access the app.
