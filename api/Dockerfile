# /api/Dockerfile

# ---- Base image ----
FROM node:18-slim

# ---- Setup working dir ----
WORKDIR /app

# ---- Copy source ----
COPY . .

# ---- Install deps + build ----
RUN npm install -g pnpm \
  && pnpm install \
  && pnpm build

# ---- Start server ----
CMD ["node", "dist/index.js"]
