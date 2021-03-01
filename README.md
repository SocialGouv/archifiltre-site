# Archifiltre site

This is the Archifiltre website, used to share news and download the application. It's powered by [gatsby](https://www.gatsbyjs.com/).

## 🚀 Quick start

1.  **Install dependencies**

    We use yarn as a dependencies manager.

    ```shell
    yarn
    ```

1.  **Start developing.**

    ```shell
    yarn dev
    ```
    
    Site is now running on `http://localhost:8000`

1.  **Testing production build**

    ```shell
    yarn build && yarn serve
    ```
    
    Production build is now running on `http://localhost:9000`
    
1.  Check all linters using

    ```shell
    yarn lint
    ```

    Will execute Prettier, Eslint and Typescript checking

All the commands are in your `package.json > scripts`.

## Deployment

Deployment is automated using @socialgouv gitlab-ci pipelines.

Pull requests are deployed on a kubernetes cluster and a test link
is posted on the PR.

Every code merged onto master is automatically deployed to production, so be careful !
