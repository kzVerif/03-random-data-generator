pipeline {
  environment {
    VERCEL_PROJECT_NAME = 'devops03-quiz1'
    VERCEL_TOKEN = credentials('VERCEL_TOKEN') // ดึงจาก Jenkins
  }
  agent any
      
    tools {
        nodejs 'NodeJS' 
    }

  stages {
    stage('Test npm') {
      steps {
            sh 'echo Test npm'
          sh 'npm --version'
          sh 'node --version'
      }
    }
    stage('Build') {
      steps {
         sh 'echo Building..............'
          sh 'npm ci'
        //   sh 'npm run build'`
      }
    }
    // stage('Test Build') {
    //   steps {
    //     sh 'echo Testing'
    //     sh 'npm run test'
    //   }
    // }
    stage('Deploy') {
      steps {
         sh 'echo Deploying..............'
          sh 'npm install -g vercel@latest'
          // Deploy using token-only (non-interactive)
          sh '''
            vercel link --project $VERCEL_PROJECT_NAME --token $VERCEL_TOKEN --yes
            vercel --token $VERCEL_TOKEN --prod --confirm
          '''
      }
    }
 
  }
}
