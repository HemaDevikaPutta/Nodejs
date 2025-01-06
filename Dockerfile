# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install application dependencies
RUN npm install

# Copy the application code into the container
COPY . .

# Expose the port that the app will run on
EXPOSE 3000
