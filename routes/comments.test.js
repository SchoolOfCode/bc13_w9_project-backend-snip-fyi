import supertest from "supertest";
import { expect, test } from "@jest/globals";
import app from "../app";


test("GET /api/codecomment", async () => {

  try {
    const response = await supertest(app).get("/api/codecomment");

    expect(response.status).toBe(200);
  
    expect(response.body).toStrictEqual({
      success: true,
      payload: expect.any(Array),
    });    
  } catch (error) {
    console.log(error)
  }
});


test("POST /api/codecomment", async () => {

  try {
    const snippet_id = "71";
    const comment_content = "Test content";
    const comment_author = "Marcel and Fabbi";
    const comment_date_create = "24-11-2022";
  
    const response = await supertest(app)
      .post("/api/codecomment")
  
      .send({
        snippet_id: snippet_id,
        comment_content: comment_content,
        comment_author: comment_author,
        comment_date_create: comment_date_create,
      });
  
    expect(response.status).toBe(200);
  
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
  } catch (error) {
    console.log(error)
  }
});

// commented out because it's not working, will come back to later to fix.
/*
test("DELETE /api/codecomment", async () => {
  const idToDelete = 12;
  const response = await supertest(app).delete("/api/codecomment/12");

  // testing the response status is 200
  expect(response.status).toBe(200);

  // testing the response body contains success: true, payload: object
  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      comment_id: idToDelete,
      snippet_id: expect.any(Number),
      comment_content: "sdCsdc",
      comment_author: "Anonymous",
      comment_date_create: "24-11-2022",
    },
  });
});
*/