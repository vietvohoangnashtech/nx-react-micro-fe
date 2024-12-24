# Docker Setup and Commands

This section provides instructions for running the micro frontend application using Docker.

## Prerequisites

- Docker installed on your machine
- Docker Compose installed on your machine
- Node.js and npm (for local development)

## Available Services

The application consists of the following services:
- Shell (Host) - Port 4200
- Login - Port 4201
- Products - Port 4202
- Cart - Port 4203

## Docker Commands

### Build all services
```bash
# Build all services
docker compose build

# Build a specific service
docker compose build shell
docker compose build login
docker compose build products
docker compose build cart

# Build with no cache (clean build)
docker compose build --no-cache
```

### Run the application
```bash
# Start all services in detached mode
docker compose up -d

# Start with build
docker compose up -d --build

# Start specific service
docker compose up -d shell
```

### Stop the application
```bash
# Stop all services
docker compose down

# Stop and remove volumes
docker compose down -v

# Stop and remove everything including images
docker compose down --rmi all
```

### View logs
```bash
# View logs of all services
docker compose logs

# View logs of specific service
docker compose logs shell
docker compose logs login

# Follow logs in real-time
docker compose logs -f
```

### Container management
```bash
# List running containers
docker compose ps

# Execute command in container
docker exec -it shell sh
docker exec -it login sh

# Stop specific service
docker compose stop shell

# Restart specific service
docker compose restart shell
```

### Cleanup commands
```bash
# Remove unused Docker resources
docker system prune

# Remove all stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove unused volumes
docker volume prune
```

## Development Workflow

1. **Initial Setup**
   ```bash
   # Build all services
   docker compose build
   ```

2. **Start Development Environment**
   ```bash
   # Start all services
   docker compose up -d
   ```

3. **Access Applications**
   - Shell Application: http://localhost:4200
   - Login Service: http://localhost:4201
   - Products Service: http://localhost:4202
   - Cart Service: http://localhost:4203

4. **Monitor Logs**
   ```bash
   # Watch logs in real-time
   docker compose logs -f
   ```

5. **Make Changes**
   - After making changes to the code, rebuild the affected service:
   ```bash
   docker compose build <service-name>
   docker compose up -d <service-name>
   ```

## Troubleshooting

If you encounter issues:

1. Check container status:
   ```bash
   docker compose ps
   ```

2. Check container logs:
   ```bash
   docker compose logs <service-name>
   ```

3. Rebuild from scratch:
   ```bash
   docker compose down
   docker compose build --no-cache
   docker compose up -d
   ```

4. Verify CORS settings:
   - Check if the nginx.conf file is properly configured
   - Ensure all services have the correct CORS headers

5. Check container filesystem:
   ```bash
   docker exec -it <container-name> ls -la /usr/share/nginx/html
   ```
