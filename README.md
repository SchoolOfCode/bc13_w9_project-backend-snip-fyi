# snip.fyi

This is the back end for snip.fyi.


## Run Locally

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
Run tests

```bash
  npm t
```


## API Reference

#### Get all code snippets

```http
  GET /api/codesnippet
```

#### Get code snippet by ID

```http
  GET /api/codesnippet/${codesnippet_id}
```
#### Get all comments

```http
  GET /api/codecomment
```
#### Get all comments by ID

```http
  GET /api/codecomments/${codecomment_id}
```
