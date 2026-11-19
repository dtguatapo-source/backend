# Build stage: install dependencies, generate the Prisma client and compile.
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# `npm run build` is only `nest build`, so the Prisma client is generated here.
# Prisma 7 uses the pg driver adapter: no Rust engine binary is needed at runtime.
RUN npx prisma generate
RUN npm run build

# Keep only production dependencies in node_modules.
RUN npm prune --omit=dev

# Runtime stage: minimal final image.
FROM node:22-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json

EXPOSE 3000
CMD ["node", "dist/main"]
