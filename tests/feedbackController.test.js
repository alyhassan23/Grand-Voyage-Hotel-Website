const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;

const controller = require("../controllers/feedbackController"); // Adjust path if necessary
const db = require("../models/db");

describe("Feedback Controller - submitFeedback", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should insert feedback and respond with success true", () => {
    const req = {
      body: {
        fullName: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        checkIn: "2025-06-15",
        roomType: "Deluxe",
        experience: "Excellent",
        serviceQuality: "Very Good",
        comments: "Loved it!",
        subscribe: true,
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    sinon.stub(db, "query").callsFake((query, values, callback) => {
      callback(null); // Simulate successful insert
    });

    controller.submitFeedback(req, res);

    expect(db.query.calledOnce).to.be.true;
    expect(res.json.calledWith({ success: true })).to.be.true;
  });

  it("should respond with 500 and success false on DB error", () => {
    const req = {
      body: {
        fullName: "Jane Smith",
        email: "jane@example.com",
        phone: "9876543210",
        checkIn: "2025-06-16",
        roomType: "Standard",
        experience: "Good",
        serviceQuality: "Average",
        comments: "Okay stay.",
        subscribe: false,
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    sinon.stub(db, "query").callsFake((query, values, callback) => {
      callback(new Error("Database error")); // Simulate DB failure
    });

    controller.submitFeedback(req, res);

    expect(res.status.calledWith(500)).to.be.true;
    expect(res.json.calledWith({ success: false })).to.be.true;
  });
});