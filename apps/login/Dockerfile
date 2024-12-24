# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application source code
COPY . .

# Build the specified app
ARG APP_NAME
RUN echo "Building application: $APP_NAME" && \
    npx nx build $APP_NAME --configuration=production && \
    ls -la dist/apps/$APP_NAME

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

# Copy built application from builder stage
ARG APP_NAME
COPY --from=builder /app/dist/apps/$APP_NAME /usr/share/nginx/html/

# Add Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Verify the deployment
RUN ls -la /usr/share/nginx/html && \
    nginx -t

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
