# Virtual-Vehicles Authentication microservice Dockerfile

FROM java:8u102-jdk

MAINTAINER Bilel I <bilel.brahim@gmail.com>

ENV REFRESHED_AT 2016-11-06

COPY target/Authentication-1.0-SNAPSHOT.jar Authentication-1.0-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/Authentication-1.0-SNAPSHOT.jar", "test", "com.example.authentication.Main"]
