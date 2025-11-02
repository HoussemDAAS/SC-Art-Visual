# Stage 1: Install dependencies and build
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./
RUN npm ci

# Copy all files and build
COPY . .
RUN npm run build

# Stage 2: Production runtime
FROM node:18-alpine AS production
WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose port and start
EXPOSE 3000
CMD ["npm", "start"]
