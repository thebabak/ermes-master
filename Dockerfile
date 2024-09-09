# Stage 1: Build the application
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY ./ /app/

# Build the Next.js app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]