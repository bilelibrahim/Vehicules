# Virtual-Vehicles Vehicle microservice Dockerfile

FROM java:8u102-jdk

MAINTAINER Bilel I <bilel.brahim@gmail.com>

ENV REFRESHED_AT 2016-11-06

COPY target/Vehicle-1.0-SNAPSHOT.jar Vehicle-1.0-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/Vehicle-1.0-SNAPSHOT.jar", "test", "com.example.vehicle.Main"]
CMD [""]
