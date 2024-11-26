# Nimble Invoice

## Project Description
Nimble Invoice is a project designed to store data passed in CSV format and display charts based on that data.

## Setup and Installation Instructions
To set up the project, use the following command to install the necessary dependencies:
```sh
npm i
```
Make sure to add env vars as shown in .env.example for each project

## Usage Instructions
To run the project, you can use the following scripts:

- For the backend:
    ```sh
    npm run dev:backend
    ```

- For the frontend:
    ```sh
    npm run dev:frontend
    ```

## Dependencies
The project dependencies are managed through npm. Ensure you have Node.js installed for smooth execution.

## Approach

## Project Architecture

In this project, a monorepo structure is used to manage both the client and server components efficiently.

The database is organized into two tables: `suppliers` and `invoices`. This separation prevents data duplication and
ensures better data management in the future.

TypeORM is utilized to provide seamless integration with the database, offering powerful tools for data manipulation and
schema management.