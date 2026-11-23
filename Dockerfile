# Etapa 1: compilar la aplicación con Maven y Java 17
FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn -B -DskipTests package

# Etapa 2: ejecutar el JAR con una imagen más ligera
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/target/portfolio.jar app.jar
EXPOSE 10000
ENTRYPOINT ["java", "-jar", "app.jar"]
