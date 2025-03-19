# Use an official Node.js LTS version for better stability
FROM node:23-alpine AS builder

# Set the working directory for the builder stage
WORKDIR /app

# Copy package.json and yarn.lock to leverage Docker cache during build
COPY package*.json yarn.lock ./

# Install dependencies from yarn.lock to ensure consistent installs
RUN yarn install --frozen-lockfile

# Copy the rest of the application code to the container
COPY . .

# Build the production version of the app (this will create the dist folder)
RUN yarn build

# Use a lightweight base image for the final stage
FROM node:23-alpine 

WORKDIR /app

# Copy the package.json and node_modules from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Expose the application's port (default for NestJS is 3000)
EXPOSE 3000

# Start the server using the production build
CMD ["yarn", "start:prod"]
