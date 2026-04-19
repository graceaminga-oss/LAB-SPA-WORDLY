Wordly SPA
Project Description

This is a simple Single Page Application (SPA) dictionary app.
Users can search a word and see its definition, pronunciation, example, and synonyms without refreshing the page.

Step 1: HTML Setup

I created a simple form with:

An input field where the user types a word
A submit button

Then I added a section to show results like:

Word
Definition
Example

I also added an area for error messages.

Step 2: CSS Styling

I styled the page to make it look clean and simple:

Centered everything on the page
Styled the input and button
Made a result box to show the word details
Added simple colors to make it easier to read

Step 3: JavaScript Setup

I used JavaScript to make the page interactive:

Added a form event listener
Used preventDefault() so the page does not reload
Got the value the user types in the input

Step 4: Fetch API

I used the Fetch API to get data from:

https://api.dictionaryapi.dev/

Used fetch() to get the word data
Used async/await to handle the request
Converted the response to JSON

Step 5: DOM Manipulation

After getting the data, I displayed it on the page:

Word
Definition
Example

The page updates without refreshing.

Step 6: Error Handling

I handled errors like:

Empty input
Word not found
API errors

I used try/catch to make sure the app does not crash.

Step 7: Version Control (Git & GitHub)

Step 8: Deployment (Vercel)

Go to vercel.com
Login with GitHub
Click “New Project”
Select my repository
Click Deploy
Features