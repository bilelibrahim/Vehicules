# Virtual-Vehicles Valet microservice Dockerfile

FROM java:8u102-jdk

MAINTAINER Bilel I <bilel.brahim@gmail.com>

ENV REFRESHED_AT 2016-11-06

WORKDIR /home/bilel/projets/vehicle-docker

ENTRYPOINT ["java", "-classpath", ".:config:", "-jar", "Valet-1.0-SNAPSHOT.jar", "test", "com.example.valet.Main"]
CMD [""]
