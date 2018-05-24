# google-analytics-api
To track active users in the website

## Preparations  
You must first make sure that you can access the Google Analytics API from the script and that the appropriate library for doing so is installed.

### Unlocking the Google Analytics API  
Go to the Google Developers Console:

    1. Create a new project (e.g. myproject).
    2. In section “APIs & auth → Credentials”, execute “Add credentials → Service account”.
        * Download the resulting JSON file (e.g. “myproject-3126e4caac6a.json”).
        * Put that file into a directory node_modules that is inside one of the parent directories of the script that we’ll create later. That means that you can keep it out of the repository with analytics.js.
        
The credentials that you created have an email address (which is displayed in the user interface and stored inside the JSON file). Copy that email address.

Go to the Admin panel in Google Analytics:

    Analytics has three scopes:
        Account
        Property
        View
    
    Create a new user in scope “Property”, via “User Management”.
        That user has the email address that you copied previously.
        Its permissions are “Read & Analyze”.
    In scope “View”, go to “View Settings” and write down the “View ID” (e.g. 97675673) for later.

### Installing the Google API client library  
    1. Google provides many public APIs. You need the “Analytics Core Reporting API”.
    2. All APIs are accessed via the Google API client library. You want the one for Node.js, which can be installed via npm:
        
        `npm install --save googleapis`