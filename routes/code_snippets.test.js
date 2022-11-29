import supertest from "supertest";
import { expect, test } from "@jest/globals";
import app from "../app";


test("Getting code snippets, checking status code and response body", async () => {
  const response = await supertest(app).get("/api/codesnippet");
  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.any(Array),
  });
});


test("POST /api/codesnippet", async () => {
  const snippet_title = "while loop";
  const snippet_code = "if (hour < 18) {\r\n  greeting = \"Good day\";\r\n}"; // needs to be valid JS
  const snippet_description = "dummy dsecription";
  const snippet_date_create = "2022-11-24"
  const response = await supertest(app)
    .post("/api/codesnippet")

    .send({
      snippet_title: snippet_title,
      snippet_code: snippet_code,
      snippet_description: snippet_description,
      snippet_date_create: snippet_date_create,
    });

  expect(response.status).toBe(200);

  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      snippet_id: expect.any(Number),
      snippet_title: expect.any(String),
      snippet_code: expect.any(String),
      snippet_description: expect.any(String),
      snippet_date_create: "2022-11-24", //postgres date format is YYYY-MM-DD
    },
  });
});

test("DELETE /api/codesnippet", async () => {
  const idToDelete = 70;
  const response = await supertest(app).delete("/api/codesnippet/70");
  expect(response.status).toBe(200);

  expect(response.body).toStrictEqual({
    success: true,
    payload: {
      snippet_id: idToDelete,
      snippet_title: "while loop",
      snippet_code: "if (hour < 18) {\r\n  greeting = \"Good day\";\r\n}",
      snippet_description: expect.any(String),
      snippet_date_create: "2022-11-24"
    },
  })
})

