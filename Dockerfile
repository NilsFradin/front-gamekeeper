# Étape 1 : build Angular
FROM node:22-bullseye AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration=production

# Étape 2 : servir avec Nginx
FROM nginx:stable
COPY --from=build /app/dist/frontend-gamekeeper/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remplacement de ${API_URL} avant le démarrage
CMD sh -c "envsubst '\$API_URL' < /etc/nginx/conf.d/default.conf > /tmp/default.conf && mv /tmp/default.conf /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"

EXPOSE 80
