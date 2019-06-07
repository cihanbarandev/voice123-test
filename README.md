# Voice123Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `npm install`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Worklog

- Understand tasks, think about potential solutions, simplify them and create trello board for tracking. (52min)
- Create search input field and button (UI), components, event listeners and routes (1 hour)
- List search results as required with a beautiful look and feel. (2 hours)
- Add angular bootstrap pagination component. (1 hour)
  I couldn't use ?page=1 query parameter because there was no pagination data in data retrieved from the API. Therefore I have implemented front-end pagination.
- Highlight the first summary paragraph. (1 hour)
  I wasn't sure with this sentences. `The first paragraph that matches the search with the searched text highlighted.` I have assumed it is required to implement the first paragraph of the user's summary.
- Prepare READMe.md file (15 min.)
- Total time-out: 1 hour

## Future Improvements and Recommendations

- Feature: Live search feature could be implemented. When the user starts typing, the search box starts listing items in a box under of it based on voice artist names or tags regarding to the artist's focal experience, sector, nationality etc.
- Feature: When a user mouse hover to the voice artist's image a lightweight gif or video could be played to show the user when the artist is performing.
- Development: Cards could be implemented as independent components for the sake of seperation of concerns.
