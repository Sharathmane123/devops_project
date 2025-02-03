pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/your-repo/devops-project.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }
        stage('Run Tests') {
            steps {
                sh 'docker-compose run backend npm test'
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh 'kubectl apply -f kubernetes/'
                }
            }
        }
        stage('Monitor Deployment') {
            steps {
                echo 'Monitoring deployment...'
            }
        }
    }
}
