pipeline {
    agent any

    tools {
        nodejs 'nodejs'   // Make sure NodeJS is configured in Jenkins
    }

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/SurajHippargi77/Restaurant_menu_website.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy / Run') {
            steps {
                bat 'npm start'
            }
        }
    }
}
