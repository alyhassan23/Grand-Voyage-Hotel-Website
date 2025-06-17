const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;

const controller = require("../controllers/roomController");
const db = require("../models/db");

describe("Availability Controller - checkAvailability", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should return 400 for invalid check-in/out dates", function (done) {
    const req = {
      body: {
        checkin: "2025-06-20",
        checkout: "2025-06-15", // Invalid
        adults: "2",
        children: "1",
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    controller.checkAvailability(req, res);

    setTimeout(() => {
      try {
        expect(res.status.calledWith(400)).to.be.true;
        expect(
          res.json.calledWithMatch({ error: "Invalid check-in/out dates" })
        ).to.be.true;
        done();
      } catch (err) {
        done(err);
      }
    }, 10);
  });

  it("should return 400 for invalid guest numbers", function (done) {
    const req = {
      body: {
        checkin: "2025-06-10",
        checkout: "2025-06-12",
        adults: "two", // Invalid
        children: "1",
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    controller.checkAvailability(req, res);

    setTimeout(() => {
      try {
        expect(res.status.calledWith(400)).to.be.true;
        expect(res.json.calledWithMatch({ error: "Invalid guest numbers" })).to
          .be.true;
        done();
      } catch (err) {
        done(err);
      }
    }, 10);
  });

  it("should return 500 on DB query error", function (done) {
    const req = {
      body: {
        checkin: "2025-06-10",
        checkout: "2025-06-12",
        adults: "2",
        children: "1",
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    sinon.stub(db, "query").callsFake((sql, values, callback) => {
      callback(new Error("Database error"), null);
    });

    controller.checkAvailability(req, res);

    setTimeout(() => {
      try {
        expect(res.status.calledWith(500)).to.be.true;
        expect(res.json.calledWithMatch({ error: "Database query error" })).to
          .be.true;
        done();
      } catch (err) {
        done(err);
      }
    }, 10);
  });

  it("should return available rooms on valid input", function (done) {
    const req = {
      body: {
        checkin: "2025-06-10",
        checkout: "2025-06-12",
        adults: "2",
        children: "1",
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const fakeRooms = [
      { id: 101, room_number: "A1", capacity: 4, status: "available" },
    ];

    sinon.stub(db, "query").callsFake((sql, values, callback) => {
      callback(null, fakeRooms);
    });

    controller.checkAvailability(req, res);

    setTimeout(() => {
      try {
        expect(res.json.calledWith({ availableRooms: fakeRooms })).to.be.true;
        done();
      } catch (err) {
        done(err);
      }
    }, 10);
  });
});
