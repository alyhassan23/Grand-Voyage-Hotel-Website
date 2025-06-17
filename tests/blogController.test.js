const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;

const controller = require("../controllers/blogController"); // update path if different
const db = require("../models/db");

describe("Blog & News Controller", () => {
  afterEach(() => {
    sinon.restore();
  });

  describe("renderBlogs", () => {
    it("should render blogs view with results", () => {
      const req = {};
      const res = {
        render: sinon.spy(),
      };

      const fakeBlogs = [{ id: 1, title: "Test Blog" }];

      sinon.stub(db, "query").callsFake((sql, callback) => {
        callback(null, fakeBlogs);
      });

      controller.renderBlogs(req, res);

      expect(res.render.calledOnce).to.be.true;
      expect(res.render.calledWith("blogs", { blogs: fakeBlogs })).to.be.true;
    });

    it("should throw error on DB failure in renderBlogs", () => {
      const req = {};
      const res = {
        render: sinon.spy(),
      };

      sinon.stub(db, "query").callsFake((sql, callback) => {
        callback(new Error("DB error"), null);
      });

      expect(() => controller.renderBlogs(req, res)).to.throw("DB error");
    });
  });

  describe("renderNews", () => {
    it("should render news view with results", () => {
      const req = {};
      const res = {
        render: sinon.spy(),
      };

      const fakeNews = [{ id: 2, title: "Latest News" }];

      sinon.stub(db, "query").callsFake((sql, callback) => {
        callback(null, fakeNews);
      });

      controller.renderNews(req, res);

      expect(res.render.calledOnce).to.be.true;
      expect(res.render.calledWith("news", { newsItems: fakeNews })).to.be.true;
    });

    it("should throw error on DB failure in renderNews", () => {
      const req = {};
      const res = {
        render: sinon.spy(),
      };

      sinon.stub(db, "query").callsFake((sql, callback) => {
        callback(new Error("DB error"), null);
      });

      expect(() => controller.renderNews(req, res)).to.throw("DB error");
    });
  });
});
