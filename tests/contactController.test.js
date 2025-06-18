const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;

const controller = require("../controllers/contactController"); // Adjust path if needed
const db = require("../models/db");

describe("Contact Controller - submitContact", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should insert contact data and render success message", () => {
    const req = {
      body: {
        name: "John Doe",
        email: "john@example.com",
        subject: "Hello",
        message: "This is a test message",
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      send: sinon.spy(),
      render: sinon.spy(),
    };

    sinon.stub(db, "query").callsFake((sql, params, callback) => {
      callback(null); // No error
    });

    controller.submitContact(req, res);

    expect(db.query.calledOnce).to.be.true;
    expect(
      res.render.calledWith("contact", {
        successMessage: "Message sent successfully!",
      })
    ).to.be.true;
  });

  it("should return 500 status on DB error", () => {
    const req = {
      body: {
        name: "John Doe",
        email: "john@example.com",
        subject: "Hello",
        message: "This is a test message",
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      send: sinon.spy(),
      render: sinon.spy(),
    };

    sinon.stub(db, "query").callsFake((sql, params, callback) => {
      callback(new Error("DB error"));
    });

    controller.submitContact(req, res);

    expect(res.status.calledWith(500)).to.be.true;
    expect(res.send.calledWith("Server error")).to.be.true;
  });
});
