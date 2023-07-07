pipeline{
    agent any
    stages{
        stage('Pull Project'){
            steps{
                git credentialsId: '5265aff1-77fb-4143-b745-6e03829637f7', url: 'https://github.com/ngocHung2000/jenkins-automation.git'
            }
        }
        
        stage('Run test'){
            steps{
                sh 'docker compose up -d'
            }
        }
        
        stage('Done test'){
            steps{
                echo 'Build Successfuly'
            }
        }
    }
}
