# find-a-flight
Test assignment for LIIS Engineering Solutions.
It’s an SPA made with React/Redux/Redux Saga.

## How to run the project:

1.	Clone the repository
`git clone git@github.com:o-strekalova/find-a-flight.git`
2.	Install dependencies
`npm i`
3.	Run web serever
`npm start`
4.	Open in browser
`https://localhost/8080`

## This project includes two routes:

`/`
Flights page is only available after authorization. There's an automatic redirect to login page. After authorization you can choose a date and get direct flight options from SkyScanner Rapid API (Browse Quotes). Cities and airports of arrival are hardset in code. So are destination pictures that you can see in a slider made with Slick library. If there's more than 5 flights in the list the customized scrollbar will appear. Note that time of flights is hardset in global state too cause it isn't provided by this API. You authorization will be stored in sessionStorage so you can refresh page without unnecessary redirects.

`/login`
Authorization page. This project doesn’t have a registration form so you can enter any combination of email and password and be “authorized”. Inputs are validated according to pre-decided rules.

## Deploy

This project is also hosted on Netlify:
https://find-a-flight.netlify.app
