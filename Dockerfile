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

EXPOSE 8080

CMD [ "npm", "run", "dev" ]

