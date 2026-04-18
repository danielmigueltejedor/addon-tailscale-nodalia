ARG BUILD_FROM
ARG BUILD_VERSION
ARG NODE_VERSION="24"

FROM node:${NODE_VERSION}-alpine AS nodebuild

FROM ${BUILD_FROM}
ARG BUILD_VERSION

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

RUN apk add --no-cache libstdc++ bash
COPY --from=nodebuild /usr/local/bin/node /usr/local/bin/
COPY --from=nodebuild /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s ../lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
  && ln -s ../lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx \
  && ln -s ../lib/node_modules/corepack/dist/corepack.js /usr/local/bin/corepack
RUN corepack enable \
  && corepack prepare pnpm@10.28.1 --activate

WORKDIR /tmp/home-assistant-matter-hub
COPY upstream/ ./
COPY README.md ./README.md
RUN [ -f LICENSE ] || printf "Apache-2.0\n" > LICENSE
ENV APP_VERSION=${BUILD_VERSION}
ENV CI=true

RUN pnpm install --frozen-lockfile \
  && pnpm --filter './packages/*' run build \
  && pnpm --filter nodalia-matter-hub run build \
  && pnpm --filter nodalia-matter-hub run bundle \
  && npm install -g ./apps/home-assistant-matter-hub/package.tgz

WORKDIR /
RUN rm -rf /tmp/home-assistant-matter-hub

COPY run.sh /usr/bin/run-matter-hub
RUN chmod +x /usr/bin/run-matter-hub

CMD ["/usr/bin/run-matter-hub"]
