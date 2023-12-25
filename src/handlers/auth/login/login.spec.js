const request = require("supertest");
const db_service = require("../../../utils/db/service");
const sample_output = [{}];

// test case for the /login api
describe("Test case for the /login api", () => {
  let server;

  // loading the server
  beforeEach(() => {
    server = require("../../../../app");
  });

  // closing the server
  afterEach(async () => {
    await server.close();
  });

  // code 200, if all input valid
  it("Should return 200, if payload is valid", async () => {
    const body = {
      partner_referral_code: "PARTN00001",
      user_name: "john_doe",
      password: "123",
    };
    jest.spyOn(db_service, "excute_statement").mockResolvedValue(sample_output);
    const response = await request(server).post("/login").send(body);
    expect(response._body.code).toBe(200);
  });

  // code 400, if no paylaod found
  it("Should return 400, if payload not found", async () => {
    const body = {};
    jest.spyOn(db_service, "excute_statement").mockResolvedValue(sample_output);
    const response = await request(server).post("/login").send(body);
    expect(response._body.code).toBe(400);
  });

  // code 422, if partner_referral_code not found in paylaod
  it("Should return 422, if partner_referral_code not found in payload", async () => {
    const body = {
      user_name: "john_doe",
      password: "123",
    };
    jest.spyOn(db_service, "excute_statement").mockResolvedValue(sample_output);
    const response = await request(server).post("/login").send(body);
    expect(response._body.code).toBe(422);
  });

  // code 422, if user_name not found in paylaod
  it("Should return 422, if user_name not found in payload", async () => {
    const body = {
      partner_referral_code: "PARTN00001",
      password: "123",
    };
    jest.spyOn(db_service, "excute_statement").mockResolvedValue(sample_output);
    const response = await request(server).post("/login").send(body);
    expect(response._body.code).toBe(422);
  });

  // code 422, if password not found in paylaod
  it("Should return 422, if password not found in payload", async () => {
    const body = {
      partner_referral_code: "PARTN00001",
      user_name: "john_doe",
    };
    jest.spyOn(db_service, "excute_statement").mockResolvedValue(sample_output);
    const response = await request(server).post("/login").send(body);
    expect(response._body.code).toBe(422);
  });
});
