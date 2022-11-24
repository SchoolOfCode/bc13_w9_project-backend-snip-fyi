// import supertest
import supertest from "supertest";

// import {expect, test} from jest 
import { expect, test } from "@jest/globals";

// import from app.js 
import app from "../app";

// testing that the get request for the comments table is functioning
test("GET /api/codecomment", async () => {
  const response = await supertest(app).get("/api/codecomment");

  // testing the response status 
  expect(response.status).toBe(200);

  // testing the request body 
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.any(Array),
  })
})

// testing that the post request for the comments table is functioning
test("POST /api/codecomment", async () => {
  // testing that request body 
  const snippet_id = "71"
  const comment_content = "Test content"
  const comment_author = "Marcel and Fabbi"
  const comment_date_create = "24-11-2022"

  const response = await supertest(app).post("/api/codecomment")
    
    .send({
      snippet_id: snippet_id,
      comment_content: comment_content,
      comment_author: comment_author,
      comment_date_create: comment_date_create
    })

  // testing that request status is 200
    expect(response.status).toBe(200)

   expect(response.body).toStrictEqual({
     success: true,
      payload: {
      comment_id: expect.any(Number),
      snippet_id: expect.any(Number),
      comment_content: expect.any(String),
      comment_author: expect.any(String),
      comment_date_create: "24-11-2022",
    },
  });
 });

 /*
// testing that the delete request for the comments table is functioning
test("DELETE /api/codecomment", async )
// testing the response status is 200
// testing the response body contains success: true, payload: object
*/
// npm t comments.test.js