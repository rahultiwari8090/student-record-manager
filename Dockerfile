FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
