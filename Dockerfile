FROM cypress/base:8

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package.json /src/app/package.json

RUN npm install

COPY . /src/app

EXPOSE 8000

COPY ./entry.sh /
RUN chmod +x /entry.sh
ENTRYPOINT ["/entry.sh"]