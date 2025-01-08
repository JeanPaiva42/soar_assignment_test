### About the ts-playwright project:

- To run the project (inside the project folder):
   - npm install

- To run the tests: 
   - npx playwright test

## Observations:

- The E2E project was structured in such a way that as it grows, we can leverage more into the user actions and components.
   - We are using pageComponents instead of pageObjects (that here turned out to be basically the same thing), so we could re-use elements/components that could appear on multiple places inside the app, something that was not fully utilized but could ended up being useful.
   - The usage of actions can sometimes make readability better for the tests and also could allow us to use them as building blocks to more complex user actions, such as login or register user.

- Not every test on this project was made exactly as the specification said, some areas of the application were reall flaky, and extra steps were not helpingto prove anything, so I cut some corner in some flows so we could extract the biggest amount of value without sacrificing the meaning and the stability of the test.


