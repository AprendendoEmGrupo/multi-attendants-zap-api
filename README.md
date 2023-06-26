## About

The api of multi attendance zap project.


## Instructions to run project

- Clone project
- Execute command **npm i** to install all modules your project needs.
- Execute command **npm run start:dev** to run project in dev environment
- Execute command **npm run start:prod** to run project in production environment
- Execute command **npm run test** to run application test


## The project structure

```
- src/
  - common                           -> where you put code you want to share between many modules.
    - configs                        -> where you put code responsable config things in project.
    - adapters                       -> where you put code interact another services. For example: firebase(storage)
  - module_name                      -> module is name associate the feature
    - module_name.controller.ts      -> code controller
    - module_name.service.ts         -> where you put business logic code 
    - module_name.module.ts          -> code module
    - module_name.dto.ts             -> code dto(data transfer object) 

```

## How to work with Git and Github

- Branch **master** code go to production
- Branch **staging** code go to staging. Warn: in future can have staging environment to validate if feature is ok before send production.
- Branch **develop** all new feature created based this branch.

### Rules 

- To write commit message in english
- Never send your directly to branchs: **master**, **staging** and **develop**
- Always you complete your feature open pull request to branch **develop**
- When create branch for new feature you need use this pattern: feature/shor_description_about_task


## Links helpful

| About  |  Language | Links  | 
|---     |---        |---     |
|   DTO pattern     |    English       |    [Click here](https://refactoring.guru/design-patterns/adapter/typescript/example)    |


