FROM openjdk:11

WORKDIR /

COPY target/app.jar app.jar

CMD ["java", "-jar", "app.jar"]
