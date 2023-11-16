FROM node:20.9.0

WORKDIR /next

COPY . .

RUN npm install
RUN npm build 

ENV NEXT_PUBLIC_API_BASE_URL=https://api.jikan.moe/v4
ENV PORT=3000

EXPOSE 3000

CMD ['npm', 'run', 'start']
