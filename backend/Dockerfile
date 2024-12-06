# Stage 1: Build the application
FROM maven:latest AS build

# Set the working directory
WORKDIR /app

# Build the application
RUN mvn clean package -DskipTests

# Stage 2: Run the application
FROM openjdk:18-jdk-alpine

# Set the working directory
WORKDIR /app

# Copy the built jar file from the build stage (then name comes from pom.xml)
COPY --from=build /app/target/students-backend-app.jar /app/students-backend-app.jar

# Expose the port the app runs on
EXPOSE 4001

# Command to run the application
ENTRYPOINT ["java", "-jar", "/app/students-backend-app.jar"]