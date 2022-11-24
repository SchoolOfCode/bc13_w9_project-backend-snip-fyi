// import supertest
import supertest from "supertest";
// import {expect, test} from jest
import { expect, test } from "@jest/globals";
// import from app.js
import app from "../app";

//Testing that the get request is working
//testing the request body
//testing that the response request is 200
test("Getting code snippets, checking status code and response body", async () => {
  const response = await supertest(app).get("/api/codesnippet");
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.any(Array),
  });
});

//Testing that the post request is working
//testing the request body
//testing that request status is 200
test("POST /api/codesnippet", async () => {
  const snippet_title = "while loop";
  const snippet_code = "dummy code";
  const snippet_description = "dummy dsecription";
  const response = await supertest(app)
    .post("/api/codesnippet")

    .send({
      snippet_title: snippet_title,
      snippet_code: snippet_code,
      snippet_description: snippet_description,
    });

  expect(response.status).toBe(200);

  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      snippet_id: expect.any(Number),
      snippet_title: expect.any(String),
      snippet_code: expect.any(String),
      snippet_description: expect.any(String),
      snippet_date_create: "24-11-2022",
    },
  });
});
//Testing that the delete request works
//testing the response data is 200
//testing the response body contains success:true and the payload of the code snippet object
