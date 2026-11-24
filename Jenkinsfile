pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Deploy with Docker') {
            steps {
                echo 'Deploying application using Docker...'
                 sh 'docker build -t webapp:latest .'
                sh 'docker run -d -p 3000:3000 --name webapp-deployment webapp:latest'
            }
        }
    }
}