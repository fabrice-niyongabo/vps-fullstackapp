FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Serve the app using http-server on port 5002
CMD ["http-server", "dist", "-p", "5002"]
