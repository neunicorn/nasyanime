FROM node:20.9.0

WORKDIR /next

COPY . .

RUN npm install
RUN npm run build

ENV NEXT_PUBLIC_API_BASE_URL=https://api.jikan.moe/v4

CMD ['npm', 'run', 'start']
