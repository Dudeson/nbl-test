# Nebula questionary

This is a next.js project bootstrapped with `create-next-app` for a test task

## Ruuning the application

Install required packages with 
```bash
npm install
```
Then you can run it dev mode with:

```bash
npm install
npm run dev
```
or if you want to make a production build: 

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

By default, the application uses the configuration from `surveyConfig/survey1.json` which corresponds to the test task design.  
I've added `surveyConfig/survey2.json` to demonstrate examples of more complex conditions. 
You can switch config filename in the `getSurvey.ts`. I created that as an async method asuming config will be fetched from BE.  
To keep things simple, I'm using only string values for now. In the future, this can be extended to support numbers, dates, and booleans.

## Dynamic variables & conditions

You can use logical & math expressions in screen `title` and `nextScreen.conditions`.  
In `title` you can use `{#if %expression%} %content% {/if}` to dynamically display text and also variables like `{var}` to display the values from previous answers:
```bash
"title": "Are you a{#if in_relationship == 'false'} single{/if} {gender} parent?",
```
In the `nextScreen` block you can pass simply next screen slug or an array of conditions that will be executed from top to bottom: 
```bash
"conditions": [
    ["in_relationship == 'true'", "in_relationship_problem"],
    ["gender == 'female' and has_children == 'true'", "female_info"],
    ["fallback", "fallback_screen"]
]
```
Each condition is an array where the first element is an expression, and the second is the slug of the next screen to navigate to if the expression is `true`;
You can also add a `fallback` option that always evaluates to `true`

I use the same expression syntax for both titles and nextScreen conditions. For a detailed syntax guide, please visit the [expr-eval](https://www.npmjs.com/package/expr-eval#expression-syntax) npm page;

## Project structure
```
nebula/
├── app/                    # Next.js app directory
│   ├── components/         # Reusable components
│   ├── survey/             # Survey pages
│   ├── layout.tsx          # Application layout
│   └── page.tsx            # Start page
├── interfaces/             # TypeScript interfaces and types
├── surveyConfig/           # Survey configuration files
├── store/                  # Redux store setup
│   ├── slices/             # Redux slices
│   └── store.ts            # Store configuration
├── utils/                  # Utility functions
├── public/                 # Static assets
├── .eslintrc.json          # Eslint configuration
├── .prettierrc             # Prettier configuration
└── package.json            # Dependencies and scripts
```
