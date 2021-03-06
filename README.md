# Lambda Bot Workshop

🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖
## Introduction

Lambda is an AWS service that allows you to run code without worrying about managing the infrastructure to host the backend code. You don't have to worry about provisioning or managing servers and you pay only for the compute time of when the code is triggered to run.

### How It Works
![alt text](https://d1.awsstatic.com/product-marketing/Lambda/Diagrams/product-page-diagram_Lambda-HowItWorks.68a0bcacfcf46fccf04b97f16b686ea44494303f.png "Lambda Process Flow")

### Our Work With Lambda
At HubSpot, we created our own wrapper service for integrating AWS Lambda with HubSpot. In the chat bot use case, we allow users to upload code snippets, we do all of the interaction with AWS lambda, so that when the time comes in a bot session for a snippet to run, our service triggers the code.



### Resources on lambda:
1. [AWS Lambda: How it Works](https://aws.amazon.com/lambda/)
2. [Benchling CRISPR Case Study](https://aws.amazon.com/solutions/case-studies/benchling/)
3. [Creating AWS Lambda Function Through AWS Console ](https://medium.freecodecamp.org/going-serverless-how-to-run-your-first-aws-lambda-function-in-the-cloud-d866a9b51536)

## Our Agenda For Today

1. Create a new portal (already did this but if not: https://www.hubspot.com/products/get-started)
2. Create and configure a basic chatbot in the portal
3. Go through how HubSpot chatbots have Lambda implemented
4. Demo example Lambda chatbot
5. Create and run code snippets on your own bots

<!-- ## Creating a New Portal (Did this in the beginning of the talk)

1. Go to https://www.hubspot.com/products/get-started
2. Click on "Get Started Free" for Marketing Hub
3. Create an account and input any webpage url you want that isn't taken
    - You can hook up a personal website if you have one or just make up one that you want (you can always change this in the future)
4. Just select "1" for how many employees work at your company, and "Other" for job role
5. Select "Yes" or "No" depending on if you are using a website that you have previously created
6. If you are using a website that you have previously created, you will have to add the embed code into your website. Else, you can skip this step.
    - This might turn out to be a pain, so feel free to go back a couple of steps and just create a made-up url for the purpose of this tutorial, and you can go back and hook up your own later -->

## Creating a New Chat Bot

1. Go to "Conversations -> Chatflows" in the top nav of the portal that you just created
2. Click on "Connect to Chat"
3. Keep the defaults of all of the settings, but name it to something else in the second to last step
4. Go to "Conversations -> Chatflows" in the top nav
5. Click on "Create chatflow"
6. Choose the "Qualify Lead" bot option, create a name and then "Create Bot"
7. Voila! You have created your first bot with the qualify lead template. Toggle your bot to be active in the top right corner and connect to the new targeted message configuration that you had just created. Now you can test your bot!
    - Once you have tested your bot check out:
        - "Contacts -> Contacts" in your nav to see the new contact that you had just created in your test

## Transforming "Qualify Lead" Bot

We're short on time, so we're going to go straight into the process of creating a lambda bot; however, feel free to create other bots and such on your own time outside of this workshop!

1. Delete all of the actions (by doing "Options -> Delete action" on the cards) except the first "Get Name" action
     - Another way to delete actions is by clicking on the action, and then the trash icon in the bottom right
2. Change the "Get Name" action to a "Get Location" action:

   ![Alt text](firstmodule.png?raw=true "Get Location")

3. Add a "Ask Question" action, choose "Custom question" and then add quick replies, which will be the different weather information you can provide the visitor:

  ![Alt text](secondmodule.png?raw=true "Get Weather Option")

4. Add a "Run a code snippet" action (under "Automation" category), name it weather app, and paste in the code from [here](weatherLambda.js)

   ![Alt text](thirdmodule.png?raw=true "Get Location")

5. Check out the full page editor view
    - You can preview and test out your app logic and behavior
    - Check out logs tab to see errors and success logs from when your code snippet runs

   ![Alt text](fullLambdaEditor.png?raw=true "Get Location")

6. Make a loop back to the "Get Weather Option" action by clicking on the lambda action, selecting the "If/then branch", and selecting "Weather Options" in the dropdown
    ![Alt text](loopback.png?raw=true "If/then Branch")

7. Add any additional bot messages you please

8. Test out your bot!
      - You can either do this by clicking "Test Bot" in the top right corner, or you can click the lambda action, select "Open in full page editor", and then click the bot icon in the left nav

## Next Steps

- Play around with adding more functionality to our current bot.
- Create your own lambda bot!
- Integrate a chatbot with lambda into your personal website!

Potential public APIs you can use can be found here: https://github.com/toddmotto/public-apis

🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖
