# Fat Daddy's Texas BBQ
### [View the active demo site here](https://fatdaddystexasbbq.netlify.app/)
<img width="1279" alt="Screen Shot 2022-09-17 at 9 53 17 PM" src="https://user-images.githubusercontent.com/56459233/190883570-3768cb1f-6c65-479c-b049-b8aaea4ee460.png">

## Details
> This project initially started as something to practice coding back in March of 2021. My cousin said she and her husband were going to open a restaurant called `Fat Daddy's Texas BBQ` so I thought `Why not attempt to build them a website?`. At that time, with beginners knowledge, I created everything with  vanilla HTML, CSS, JS. After attending GA, I have learned a lot of new techniques that really cleaned up my code. I found this project a few days ago and decided it needed an overhaul. 

I created this new version using `React`, `Tailwind`, and `Hygraph CMS` for the data management. 

## Hygraph Content API Endpoint:

`'https://api-us-east-1.hygraph.com/v2/cl83s5iwu1bgg01ug5cjx6s6d/master'`

### Menu Page
<img width="1279" alt="Screen Shot 2022-09-17 at 9 53 29 PM" src="https://user-images.githubusercontent.com/56459233/190883649-500b592b-c9f5-48ec-8148-4f4ab4ad8076.png">

### Mobile - Home Page
<img width="412" alt="Screen Shot 2022-09-17 at 9 53 50 PM" src="https://user-images.githubusercontent.com/56459233/190883655-f9c7e1b9-e795-438d-8366-012a9cb44946.png">

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Todo: 
1. Go through each page and double-check that everything is included in the `Hygraph CMS` schemas
2. Set up image paths to accept a url `string` or an `image` object. If the `imageString` is used in `Hygraph`, prioritize `imageString` over the `image` object.
