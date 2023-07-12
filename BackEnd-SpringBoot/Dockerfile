# Build stage
FROM maven:3.6.3-openjdk-17-slim AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src/ /app/src/
RUN mvn package -DskipTests

# Run stage
FROM openjdk:17-oracle
WORKDIR /app
EXPOSE 8080
COPY --from=build /app/target/BackEnd-SpringBoot-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
