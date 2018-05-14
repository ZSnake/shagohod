##Moviewer
## To run
- Clone repo
- yarn start
- yarn test (to run tests)

## Description
Moviewer FE fetches a movies list coming from the backend, stores it in a Redux Store and displays it
in google maps. The movies list can be filtered by several possible values (Title, Release Year and Director but
other fields can be implemented easily). All API calls are made in the domain model through redux connected components,
then the data fetched is sorted using selectors and passed in to the connected container component which then renders
presentational components with all the information passed in.

## Technologies used
- React 16 (create-react-app)
- react-router
- redux
- Flow
- Jest
- Google Maps

## Trade-offs
Mainly due to time constrains some things I wanted to implement were left out.
- More thorough testing (missing component testing)
- Display movies information in tooltips in the map (movies are being printed in console for reference)
- Pagination implemented correctly (to avoid pulling the 1000 results the backend could get)
- Loading spinner
- Better style structure (right now just using a single CSS file)