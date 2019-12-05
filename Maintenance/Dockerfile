# Virtual-Vehicles Maintenance microservice Dockerfile

FROM java:8u102-jdk

MAINTAINER Bilel I <bilel.brahim@gmail.com>

ENV REFRESHED_AT 2016-11-06

ADD target/Maintenance-1.0-SNAPSHOT.jar Maintenance-1.0-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/Maintenance-1.0-SNAPSHOT.jar"]
