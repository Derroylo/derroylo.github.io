# Add new Services

## Short explaination

Depending on your project, the services that are defined in the docker-compose.yml may not be enough and you need to add one or more services for your project. So we will add another service within this documentation.

## Predefined services

When looking at the [docker-compose.yml](/convert_project#docker-compose-yml-line-18) from the `How to setup your project with WebDev`, you can see already some services that you can use. If this isn´t enough, then you can add any service that your project requires.

## Add a new service

Within this example we will add elasticsearch as new service. So open the `docker-compose.yml` with your editor and add the following lines under `services`.

```yaml:line-numbers
services:
    elasticsearch:
        labels:
            com.webdev.category: "tools"
            com.webdev.name: "Elasticsearch"
            com.webdev.description: "Elasticsearch"
        image: elasticsearch:7.17.6
        container_name: ${COMPOSE_PROJECT_NAME:-devcontainer}-elasticsearch
        networks:
        - webdev-network
        ports:
        - 9200:9200
        environment:
            discovery.type: single-node
            xpack.security.enabled: 'false'
        volumes:
        - elasticsearch-data:/usr/share/elasticsearch/data
```

And under `volumes`, you need to add `elasticsearch-data:`

```yaml:line-numbers
volumes:
  bashhistory:
  elasticsearch-data:
```

To tell WebDev that you want to start the new service, you need to first add it to your [webdev.yml](http://localhost:5173/reference/webdev_yml/services#active). As alternative you can use the command `webdev services select` to select the services you want to start. If you have already started your development environment, then just execute the command `webdev services start -d` on your host system, to start the new service. Otherwise just start it normally and the new service will be available.

## A more detailed explaination

::: info
If you are not familiar with how docker-compose works in general, i recommend looking at the docker documentation first, or watch one of the many good tutorials on youtube etc.
:::

So taking again the example from above, i will explain in short what they do

```yaml:line-numbers
services:
    elasticsearch:
        labels:
            com.webdev.category: "tools"
            com.webdev.name: "Elasticsearch"
            com.webdev.description: "Elasticsearch"
        image: elasticsearch:7.17.6
        container_name: ${COMPOSE_PROJECT_NAME:-devcontainer}-elasticsearch
        networks:
        - webdev-network
        ports:
        - 9200:9200
        environment:
            discovery.type: single-node
            xpack.security.enabled: 'false'
        volumes:
        - elasticsearch-data:/usr/share/elasticsearch/data
```

### Name (line 2)

This is the name of our service. It needs to be unique within the file and is also used to contact the service from within the nework. So if your application, that runs within the devcontainer, wants to use that service that is what you want to use as hostname.

### Labels (line 3-6)

Labels are used for WebDev to make the output more clearer when you want to select the active services or when using the info output. But they are also used for the [proxy function](/proxy). Important here is that you can´t change labels after the containers have been created. When you want to change them, you need to recreate that container.

### Image (line 7)

That is the base image from which we create the container. You can use any image from a public container registry like hub.docker.com or also from a private registry. When you need to login first to access that image, then use [secrets](/secrets).

### Container name (line 8)

This will be the resulting name of the container. `${COMPOSE_PROJECT_NAME:-devcontainer}` is a variable that will be set by WebDev and is usually the name of the folder in which your project is located. `elasticsearch` should be replaced with the name of the container.

### Network (line 9-10)

This needs to be set to the shown value. It tells docker that this container should connect to the given internal network, so that all containers can communicate with each other. This network is also bridged to your computer, so that you can access it via your browser etc.

### Ports (line 11-12)

Here are the ports that should be made available outside of it´s internal network. So that you can access them from your computer, like accessing the webserver or connect to the database via DBeaver, HeidiSQL etc. The first port is the one you want to use when accessing this service from the outside and which needs to be unique, the other one is the port on which your application is running within that container.

### Environment (line 13-15)

Environment Variables are mostly configuration settings for the application that runs inside your container. Check the documentation of the image on which environment variables exist

### Volumes (line 16-17)

If you "need" to define volumes depends on the image you are using for that service. In basic these volumes store data from that service. Usually you want to use them when you want to keep the data, even when you delete the container and recreate it later.