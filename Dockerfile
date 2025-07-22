# Stage 1: The Builder
# This stage installs all dependencies (including dev) and generates the Prisma client.
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Copy the Prisma schema which is needed for 'prisma generate'
COPY prisma ./prisma/

# Install all dependencies, including devDependencies needed for building
RUN npm install

# Generate the Prisma client
RUN npx prisma generate

# Copy the rest of your application's source code
COPY . .

# ---

# Stage 2: The Production Image
# This stage creates the final, lean image for production.
FROM node:18-alpine

WORKDIR /usr/src/app

# Set the environment to production
ENV NODE_ENV=production

# Copy package files and install *only* production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy the application code and the generated Prisma client from the builder stage
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/src ./src
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma

# Expose the port your app runs on. Change 8000 if your app uses a different port.
EXPOSE 8000

# The command to start your application.
# This assumes you have a `src/index.js` file that starts the Express server.
# If your entry point is `src/app.js`, you'll need to create `src/index.js` to run it,
# or change the command to: CMD [ "node", "src/app.js" ]
CMD [ "node", "src/index.js" ]

