FROM node:14-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# Copy all files from the builder stage
COPY --from=builder /app ./

# Set environment variables
ENV NODE_ENV production
ENV PORT 3003
ENV NEXT_PUBLIC_BASE_URL=https://api.homechow.ca

# Expose the application port
EXPOSE 3003

# Start the application
CMD ["npm", "start"]
