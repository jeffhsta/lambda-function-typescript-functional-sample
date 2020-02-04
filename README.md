# Lambda function Typescript functional sample

This repo has an ideia of a serverless microservice using only functional programming concepts in
Typescript.

PS. I am new in Typescript, so you may find some dumb code here.

## Setup

```shell
$ npm install
```

## Tests

```shell
$ npm test
```

## Coding rules

This project follow functional programming paradigm as much as possible using Typescript, in thi
case not classes will be allowed, for data structures will be used `interfaces` with only
`readonly` fields.

Dependency injection will not be used, instead will be possible to use inversion of control.

### Event handlers

Are responsable only for getting the AWS event, parse that to what
the `use-case-controller` needs and knows how to call `error-handler` module.

### Use case controllers

Are the layer where it's main job is to orchestrate the calls to `business` and `ports` layers,
as well as knowing how to handle rollback in case of errors (when needed).

### Business

This is the layer where all the business logic sits, this layer must only have pure functions,
which means that this must not do any side effects.

Any need of `async`/`await` or `mocks` during unit testnig this layer indicates that something is going
wrong.

### Ports

The layer of the side effects, where sits all the integrations with 3rd parties APIs, databases,
cache services and etc.

This layer has the responsability to have the abastraction of the protocol that's being used, like
how the request payload of an 3rd API looks like, or how to build a query in the database.

There is no unit testing in this layer, since it's main job is to do side effects here will only
have integration to out side world tests.

The `ports` layer will be mocked during any integration/functional testing.

Does not mock any library, it's allowed to only mock code from this own repo, in this case will be
only this layer.

### Domain

Here will be the common data structure used in the application.