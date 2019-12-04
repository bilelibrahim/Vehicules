# Virtual-Vehicles Vehicle microservice Dockerfile

FROM java:8u102-jdk

MAINTAINER Bilel I <bilel.brahim@gmail.com>

ENV REFRESHED_AT 2016-11-06

WORKDIR /home/bilel/projets/vehicle-docker
RUN echo 'we are running some # of cool things'
RUN pwd
RUN ls -la
ENTRYPOINT ["java", "-classpath", ".:config:", "-jar", "Vehicle-1.0-SNAPSHOT.jar", "test", "com.example.vehicle.Main"]
CMD [""]
