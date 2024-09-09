# Overview

The greatest challenge of this project was coming up with an idea of what to showcase. My initial thought was to create a dynamic data visualization, but it has already been [done](https://data.sfgov.org/d/rqzj-sfat/visualization). My next idea was to make a heatmap with vender information, but the city already covered that with their [map](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Permit-Map/px6q-wjh5). Then I considered making a searchable table where one could sort and sift the data - but they have a [table](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/data_preview) with this functionality already. The next iteration was combining data sets: map crime stats to food truck location and find how safe the area around the food truck is, so that's the direction I headed.

This app is designed to take in a food truck search term and respond back with matching food trucks and crime data based on the food truck location. It works in 2 parts:

- Query for food truck matching on name or food items
- View data on matching food trucks
- Upon selecting a food truck render crime statistics for the area

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

The build is minified and the filenames include the hashes.

## Future Iterations and Changes

For simplicity sake, this is hosted on Github pages, and is purely a frontend. Given unlimited time I would set this up to include a server to handle requests. Since the data for food trucks and police department incident reports is updated daily, a CRON job to fetch the data once a day would be appropriate. It could then be stored in a reddis database where quick look up is king (though building a SQL table for each which is refreshed daily is also possible). This would also avoid limiting out on API requests (a limit placed by [SODA](https://dev.socrata.com/docs/app-tokens)) - and free up the public network.

Technically, that dataset isn't too big to live in memory (as this app shows). The client could make a single request to fetch the data and keep in Redux or a similar data store, or the server could keep it locally. I initially made a script to parse the CSV data and have it as a file before I found the API for calling it directly. While food trucks are not likely to increase in number, police reports will only continue to grow (they actually have the data broken up into two data sets: one ending in 2018 and this one starting then). So this solution isn't scalable, especially if future requirements included adding more data sets to query against like 311 calls or ambulance dispatches.

Testing is something I strongly believe in, and given more time would gladly add to the project.

There are some styling changes I would make with extra time:

- Style scrollbar on police data
- Do something with the empty space between food truck cards when they are not the same height
- Add mobile support
- Add loading state (assuming api calls)
- Add buttons ability to toggle what fields are rendered on food truck data and police card data
- Update color scheme
- Make a "happy" screen when no police reports are within distance

## Challenges and Design Choices

I started this as a TypeScript project. However the [SODA.js](https://github.com/socrata/soda-js) doesn't ship with any types. I worked through adding in types but ran into library issues. So I swapped TypeScript for regular .js to simplify things. However, after further investigation the library provided to query the dataset fundamentally doesn't run, and was last updated 5 years ago. So I ended up not using the query library provided by SODA and kept the project on JavaScript.

After the library proved unusable I pivoted to using the [API](https://data.sfgov.org/resource/wg3w-h783.json). However, I was only able to run simple queries and I was getting errors from their server due to type issues. If I submitted a query based on an id, the response would have `query.soql.type-mismatch; Type mismatch for op$=, is number;` complaining that the query for an Id should be a number but I was submitting a string. Lacking the ability to convert my url to a number (and several other query issues) I opted to have the data locally.

There is a mix of inline styling and .css files used. The philosophy here is: where css usage depends on application logic I'm using inline styling for clarity. When the css is used purely for appearance then it lives in the .css file.
