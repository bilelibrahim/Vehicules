# Virtual-Vehicles Vehicle microservice Dockerfile

FROM java:8u102-jdk

MAINTAINER Bilel I <bilel.brahim@gmail.com>

ENV REFRESHED_AT 2016-11-06

COPY /home/bilel/projets/vehicle-docker/Vehicle-1.0-SNAPSHOT.jar /usr/share/java/virtual-vehicles/Vehicle-1.0-SNAPSHOT.jar
WORKDIR /usr/share/java/virtual-vehicles

ENTRYPOINT ["java", "-classpath", ".:config:", "-jar", "/usr/share/java/virtual-vehicles/Vehicle-1.0-SNAPSHOT.jar", "test", "com.example.vehicle.Main"]
CMD [""]
