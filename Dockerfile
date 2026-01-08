FROM --platform=linux/amd64 node:16

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose Gatsby's default port
EXPOSE 8000

# Run Gatsby develop with host binding for Docker
CMD ["npm", "run", "develop", "--", "-H", "0.0.0.0"]
