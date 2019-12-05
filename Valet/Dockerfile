# Virtual-Vehicles Valet microservice Dockerfile

FROM java:8u102-jdk

MAINTAINER Bilel I <bilel.brahim@gmail.com>

ENV REFRESHED_AT 2016-11-06

COPY target/vehicle-docker/Valet-1.0-SNAPSHOT.jar Valet-1.0-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/Valet-1.0-SNAPSHOT.jar"]
CMD [""]
