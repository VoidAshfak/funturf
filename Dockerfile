FROM node:current-alpine3.21

WORKDIR /funturf/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

ENV PORT=8080
ENV DATABASE_URL=mongodb+srv://asfaqulasif:funturf123@cluster0.lv8ld.mongodb.net/funturf
ENV CORS_ORIGIN=http://localhost:3000
ENV ACCESS_TOKEN_SECRET=funturf123
ENV ACCESS_TOKEN_EXPIRY=1d
ENV REFRESH_TOKEN_SECRET=funturf123
ENV REFRESH_TOKEN_EXPIRY=10d
ENV CLOUDINARY_API_KEY=622424748388312
ENV CLOUDINARY_SECRET_KEY=okvH7M_G4zbQkdXzjrZxRy_5kdQ


# # ---

# # Stage 2: The Production Image
# # This stage creates the final, lean image for production.
# FROM node:18-alpine

# WORKDIR /funturf/app

# # Set the environment to production
# ENV NODE_ENV=production

# # Copy package files and install *only* production dependencies
# COPY package*.json ./
# RUN npm install --only=production

# # Copy the application code and the generated Prisma client from the builder stage
# COPY --from=builder /usr/src/app/public ./public
# COPY --from=builder /usr/src/app/src ./src
# COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma

# Expose the port your app runs on. Change 8000 if your app uses a different port.
EXPOSE 8080

# The command to start your application.
# This assumes you have a `src/index.js` file that starts the Express server.
# If your entry point is `src/app.js`, you'll need to create `src/index.js` to run it,
# or change the command to: CMD [ "node", "src/app.js" ]
CMD [ "npm", "run", "dev" ]

