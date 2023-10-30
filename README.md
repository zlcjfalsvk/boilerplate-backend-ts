# Boiler PlateBackend Ts

보일러 플레이트 만들면서 개인 공부 프로젝트

# Skills

- Node v18
- [nx.dev](https://nx.dev/)
  - monorepo 관리 tool

- IaC
  - terraform
  
- [LocalStack](https://localstack.cloud/)
  - IaaS to Locally 
  - RDS 같은 경우 pro 에서만 제공되기 때문에 `docker-compose` 대체

- Backend
  - [Nestjs](https://nestjs.com/)

- Optional
  - IntelliJ 
    - [Nx Console plugin](https://plugins.jetbrains.com/plugin/21060-nx-console)
      - Intellij 에서 nx project 를 생성 및 관리할 수 있음
  - VS Code
    - [Nx Console extension](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)
      - VS Code 에서 nx project 를 생성 및 관리할 수 있음

# Running
- nvm use 또는 node 18 설치
- npm install


# Issue
- nestjs 에서 serverless 를 위해 node_module 까지 포함한 bundle 시 밑의 module 을 webpack 에서 ignore 해줘야 한다. <br />
  하지만 nx.dev 측에서 `new webpack.Ignreplugins` 적용이 되지 않아 다른 방안 대처 
  ```
     const lazyImports = [
      '@nestjs/microservices/microservices-module',
      '@nestjs/websockets/socket-module',
    ];
  ```
  - nx.json 에서 generatePackageJson 옵션을 `trun-on` 후 zip 파일로 압축 후 lambda layer 에 포함 시켜야 할 듯
  - nx 가 아니라 nestjs 만 사용한다면 custom webpack 이 가능함
  
