# Virtual-Vehicles Valet microservice Dockerfile

FROM java:8u102-jdk

MAINTAINER Bilel I <bilel.brahim@gmail.com>

ENV REFRESHED_AT 2016-11-06

#COPY ./build-artifacts /Users/Shared/Jenkins/Home/workspace/Vehicule-Docker
WORKDIR /Users/bilel/Data/jenkins_home/workspace/Vehicule-Docker

ENTRYPOINT ["java", "-classpath", ".:config:", "-jar", "{{ jar_file }}", "test", "com.example.valet.Main"]
CMD [""]
