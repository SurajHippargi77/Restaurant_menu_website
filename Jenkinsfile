pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/SurajHippargi77/Restaurant_menu_website.git'
            }
        }

        stage('Run Website') {
            steps {
                bat 'start index.html'
            }
        }
    }
}
