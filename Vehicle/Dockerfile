# Virtual-Vehicles Vehicle microservice Dockerfile

FROM java:8u102-jdk

MAINTAINER Bilel I <bilel.brahim@gmail.com>

ENV REFRESHED_AT 2016-11-06

ADD target/Vehicle-1.0-SNAPSHOT.jar /usr/share/java/virtual-vehicles
WORKDIR /usr/share/java/virtual-vehicles

ENTRYPOINT ["java", "-jar", "/Vehicle-1.0-SNAPSHOT.jar"]
CMD [""]
