pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/SurajHippargi77/Restaurant_menu_website.git'
            }
        }

        stage('Check Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Run Website') {
            steps {
                bat 'start index.html'
            }
        }
    }
}
