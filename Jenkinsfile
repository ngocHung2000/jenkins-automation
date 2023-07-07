pipeline {
    agent none
    stages {
        stage('Pull code Back-End'){
            agent { label 'Slave01' }
            steps {
                git(
                    url: 'https://github.com/ngocHung2000/jenkins-automation.git',
                    branch: 'master',
                    credentialsId: '5c07943c-8fd5-4d5a-8a97-939ab38b4d1a'
                )
            }
        }
        stage('Build BackEnd') {
            agent { label 'Slave01' }
            steps {
                tools {
                    docker 'docker-latest'
                }
                dir('BackEnd-SpringBoot'){
                    // script {
                    //     docker.build("ngochung1809/back-end-springboot:latest")
                    // }
                    sh 'docker build -t ngochung1809/back-end-springboot:latest .'
                }
            }
        }
        stage('Pull code Front-End'){
            agent { label '02' }
            steps {
                git(
                    url: 'https://github.com/ngocHung2000/jenkins-automation.git',
                    branch: 'master',
                    credentialsId: '13d52183-4750-49a0-9804-098dc413a403'
                )
            }
        }
        stage('Build FrontEnd') {
            agent { label '02' }
            steps {
                tools {
                    docker 'docker-latest'
                }
                dir('FrontEnd-Angular'){
                    sh 'docker build -t ngochung1809/front-end-angular:latest .'
                }
            }
        }
        stage('Test') {
            parallel {
                stage('Linux test') {
                    agent { label 'Slave 01' }
                    steps {
                        sh './run_linux_tests.sh'
                    }
                }
            }
        }
        stage('Deploy') {
            agent { label 'prod' }
            steps {
                sh 'deploy_to_prod.sh'
            }
        }
    }
}
