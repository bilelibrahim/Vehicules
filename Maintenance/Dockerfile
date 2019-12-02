# Virtual-Vehicles Maintenance microservice Dockerfile

FROM java:8u102-jdk

MAINTAINER Bilel I <bilel.brahim@gmail.com>

ENV REFRESHED_AT 2016-11-06

COPY ./build-artifacts /usr/share/jenkins/virtual-vehicles
WORKDIR /usr/share/jenkins/virtual-vehicles

ENTRYPOINT ["java", "-classpath", ".:config:", "-jar", "Maintenance-1.0-SNAPSHOT.jar", "test", "com.example.maintenance.Main"]
CMD [""]
