#!/bin/bash

sudo apt-get -y update
sudo apt-get install openjdk-11-jdk -y
wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-8.6.1.40680.zip
unzip sonarqube-8.6.1.40680.zip
sudo mv sonarqube-8.6.1.40680 /opt/sonarqube