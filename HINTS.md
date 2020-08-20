# Hints and Tips :tada:

1. There's multiple screenshots of how this web app should look if you need design inspiration inside of the Assets folder.

   > Feel free to be creative though!

1. Remember to initialise your react app you need to run `npx create-react-app employee-directory`.

1. Feel free to use Bootstrap through this homework.

1. Sort the table by at least one category, and filter the users by at least one property.

1. Use the random user generators through this API which is available here to use:

   ```js
   // src/utils/api.js (Example);

   import axios from "axios";

   export default {
     // Gets all users
     getUsers: function () {
       return axios.get("https://randomuser.me/api/?results=100&nat=gb");
     },
   };
   ```

1. You might be tempted to get adventurous with the React docs. Keep this homework simple and use what we've covered this week and stick to React's Class Based Components when interacting with state.

1. React apps don't necessarily need to be hosted on something like Heroku if they don't have a database connection.

   This is cool because it means we can make use of GitHub Pages instead.

   https://create-react-app.dev/docs/deployment/#github-pages

   > Following this you should be able to get it working.

   > **You are not deploying as a GitHub user page, your github pages url will look like: https://myusername.github.io/my-app**

# Submission Checklist :rocket:

1. Ensure that you submit both a link to your homework repo and it should be deployed on GitHub pages: https://create-react-app.dev/docs/deployment/#github-pages

1. :star: **Make sure that your repo has a link to the deployed GitHub pages application** :star:

1. Ensure what you've submitted works when you grade it yourself against the:

   - The user stories provided
   - The acceptance criterias provided.
   - The business context provided.

1. Make sure your homework repo has a quality README that _you_ have written, and provide screenshots

1. Commit after most changes, all that code doesn't just appear first time :wink:

1. **Comment that JavaScript code :pray:**
