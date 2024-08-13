
# Authentication App using MERN Stack 🔑

This is a simple authentication app built using the MERN (MongoDB, Express, React, Node.js) stack. The app allows users to sign up, log in, and log out, with features such as password hashing, JWT token authentication, input validation, and CORS enabled for cross-origin resource sharing.





## Features

- **Sign Up:** Users can create an account by providing a username, email, and password.
- **Log In:** Users can log in to their account using their email and password.
- **Log Out:** Users can log out of their account.
- **Password Hashing:** Passwords are hashed using bcrypt for secure storage in the database.
- **JWT Token Authentication:** JSON Web Tokens (JWT) are used to authenticate users and authorize access to protected routes.
- **Input Validation:** Input fields are validated to ensure that users enter valid data.

- **CORS Enabled:** Cross-Origin Resource Sharing (CORS) is enabled to allow requests from different origins.


## Technical Details

**Frontend:** React

**Backend:** Node.js, Express

**Database:** MongoDB

**Authentication:** JSON Web Tokens (JWT)

**Password Hashing:** bcrypt

**CORS:** Enabled for cross-origin resource sharing

**Testing:**  APIs tested using Postman
## API Endpoints


#### login 

```http
  POST /auth/login
```

#### signup

```http
  POST /auth/signup

```
#### get products

```http
  GET /products
```



## Run Locally

Clone the project

```bash
  git clone https://github.com/diveshsaini1991/Auth-app.git
```
Go to the backend directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

create **.env file** following next section

Start the server

```bash
  npm run start
```

Go to the frontend directory

```bash
  cd ../frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Environment Variables

create **.env** file in **backend** directory only

```dotenv
PORT=3001
MONGO_URL= your_mongodb_uri
JWT_SECRET= your_secret_token
```


## Demo

link - https://auth-app-frontend-dun.vercel.app/login


# Contributing to the Authentication App Project🤝

We welcome and appreciate contributions from the community to enhance and improve the Authentication App Project. Whether you're a developer, designer, tester, or someone with valuable feedback, your input is valuable.
## Thank You!❤️

Thank you for considering contributing to the Authentication App Project. Your efforts help make this project better for everyone. If you have any questions or need assistance, feel free to reach out through the issue tracker or discussions. Happy coding🤩!