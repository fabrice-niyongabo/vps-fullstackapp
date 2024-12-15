FROM node:lts-alpine

# Install serve for local serving
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Serve the app using serve on port 5002
CMD ["serve", "-s", "dist", "-l", "5002"]
