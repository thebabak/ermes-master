# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Serve the application using a lightweight web server
FROM node:18-alpine

# Create a non-root user and group named 'nextjs'
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Set working directory
WORKDIR /app

# Copy necessary files from the build stage
COPY --from=builder /app/styles ./styles
COPY --from=builder /app/pages ./pages
COPY --from=builder /app/utils ./utils
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.mjs ./

# Ensure that the nextjs user owns the necessary directories
RUN chown -R nextjs:nextjs /app

# Switch to the nextjs user
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
