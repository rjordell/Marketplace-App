# Marketplace App

Marketplace App

## Table of Contents

- [Marketplace App](#marketplace-app)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [App Navigation](#app-navigation)
  - [Next Auth](#next-auth)
  - [Database](#database)

## Tech Stack

- [Yarn](https://yarnpkg.com/) package manager
- [React](https://react.dev/) library for building user interfaces
- [Next.js](https://nextjs.org/) framework for React
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [shadcn/ui](https://ui.shadcn.com/) for UI components using Radix UI and Tailwind CSS
- [SQLite](https://github.com/kriasoft/node-sqlite) database

## App Navigation

The marketplace app is a multi-page app. The pages are laid out as follows:

- `/` - The home page of the app. This page displays all of the listings that are available. The main page has the following query parameters:
  - `search` - The search query. This query parameter is used to filter the listings by title.
  - `category` - The category query. This query parameter is used to filter the listings by category.
- `/seller/[sellerId]` - The seller page of the app. This page displays all of the listings, reviews, and information for a specific seller. The seller's username is a [dynamic route](#reading-dynamic-routes) for the page. For example, `/seller/usernameHere`. The seller page has the following query parameters:
  - `tab` - The tab is a string that can be set the active tab of the page automatically. This can be used when navigating to a specific tab on the seller page.
  - `withdraw` - The withdraw query parameter is used to display the withdraw dialog when navigating to the seller page. This can be used when navigating to the seller page to withdraw funds.
- `/item/[username]/[itemId]` - The item page of the app. This page displays all of the information for a specific listing. The seller's username and the listing's id are passed dynamic routes for the page. For example, `/item/usernameHere/1`.
- `/cart` - The cart page of the app. This page displays all of the items that are in the user's cart.
- `/rate/[username]` - The rate page for a seller. This page allows the user to rate a seller. The seller's username is passed as a dynamic route for the page. For example, `/rate/usernameHere`.
- `/rate/[username]/[itemId]` - The rate page for an item. This page allows the user to rate an item. The seller's username and the listing's id are passed as dynamic routes for the page. For example, `/rate/usernameHere/1`.


## Next Auth

This app uses [Next Auth](https://next-auth.js.org/) for authentication. While Next Auth supports Google, Facebook, Twitter, and many other providers, this app uses a simple username and password authentication strategy as that is not the focus of this quest.

## Database

The app uses a SQLite database to store the app data directly in the app's local file system. All of the database functionality and API endpoints have been implemented for you. The database functionality can be found in the [`db/utils.ts`](./db/utils.ts) file, while all of the types used can be found in [`db/schema.ts`](./db/schema.ts).

### Deploying the app locally

1. Navigate to the [root directory](./) of the app.
2. Run `yarn install` to install the dependencies.
3. Run `yarn dev` to start the app.
4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
