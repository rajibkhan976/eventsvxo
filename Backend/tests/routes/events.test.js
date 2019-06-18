const sinon = require('sinon');

const mongoose = require('mongoose');
require('sinon-mongoose');

const app = require('../../index.js');

const agent = require('supertest').agent(app);

const expect = require('chai').expect;

const Events = mongoose.model('Events');

let eventMock = sinon.mock(Events);

beforeEach(() => {
  eventMock.restore();
  eventMock = sinon.mock(Events);
});

afterEach(() => {
  eventMock.verify();
});

const expected = {
  "start_date": {
    "year":2019,
    "month":6,
    "day":15,
    "time":"12:00:00"
  },
  "end_date": {
    "year":2019,
    "month":6,
    "day":15,
    "time":"15:00:00"
  },
  "_id":"5d021a01f852ee4ae01cf289",
  "title":"Summer fest",
  "location":"Storgatan 3",
  "price":"free",
  "category":"concert",
  "tags":"summer classic",
  "additional_info":"alchohol not allowed",
  "host":"VIS",
  "img":"vis.jpg",
  "__v":0
};

const request = {
  "start_date": {
    "year":2019,
    "month":6,
    "day":15,
    "time":"12:00:00"
  },
  "end_date": {
    "year":2019,
    "month":6,
    "day":15,
    "time":"15:00:00"
  },
  "title":"Summer fest",
  "location":"Storgatan 3",
  "price":"free",
  "category":"concert",
  "tags":"summer classic",
  "additional_info":"alchohol not allowed",
  "host":"VIS",
  "img":"vis.jpg",
};

describe('events.get', () => {
  it('Should return an array of all events', (done) => {
    eventMock
    .expects('find')
    .chain('exec')
    .resolves([expected]);

    agent
    .get('/events')
    .end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.eql([expected]);
      done();
    });
  });

  it('Should return an event by category', (done) => {
    eventMock
    .expects('find')
    .withArgs({"category": "concert"})
    .chain('exec')
    .resolves(expected);

    agent
    .get('/events?category=concert')
    .end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.eql(expected);
      done();
    });
  });

  it('Should return an event by id', (done) => {
    eventMock
    .expects('findById')
    .chain('exec')
    .resolves(expected);

    agent
    .get('/events/5d021a01f852ee4ae01cf289')
    .end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.eql(expected);
      done();
    });
  });
});

describe('event.post', () => {
  it('Should be able to add an event', (done) => {
    eventMock
    .expects('create')
    .withArgs(request)
    .chain('exec')
    .resolves(expected);

    agent
    .post('/events')
    .send(request)
    .end((err, res) => {
      expect(res.status).to.equal(201);
      expect(res.body).to.eql(expected);
      done();
    });
  });
});

describe('event.patch', () => {
  it('Should be able to create an event', (done) => {
    eventMock
    .expects('updateOne')
    .withArgs({ _id: "5d021a01f852ee4ae01cf289" }, request)
    .chain('exec')
    .resolves({
      n: 1,
      nModified: 0,
      upserted: [{index: 0, _id: "5d021a01f852ee4ae01cf289"}],
      ok: 1
    });

    agent
    .patch('/events/5d021a01f852ee4ae01cf289')
    .send(request)
    .end((err, res) => {
      expect(res.status).to.equal(201);
      done();
    });
  });

  it('Should be able to update an event', (done) => {
    eventMock
    .expects('updateOne')
    .withArgs({ _id: "5d021a01f852ee4ae01cf289" }, request)
    .chain('exec')
    .resolves({
      n: 1,
      nModified: 1,
      ok: 1
    });

    agent
    .patch('/events/5d021a01f852ee4ae01cf289')
    .send(request)
    .end((err, res) => {
      expect(res.status).to.equal(200);
      done();
    });
  });

  it('Should return 204 if do not update an event', (done) => {
    eventMock
    .expects('updateOne')
    .withArgs({ _id: "5d021a01f852ee4ae01cf289" }, request)
    .chain('exec')
    .resolves({
      n: 1,
      nModified: 0,
      ok: 1
    });

    agent
    .patch('/events/5d021a01f852ee4ae01cf289')
    .send(request)
    .end((err, res) => {
      expect(res.status).to.equal(204);
      done();
    });
  });
});

describe('event.delete', () => {
  it('Should be able to delete an event', (done) => {
    eventMock
    .expects('findByIdAndDelete')
    .withArgs({ _id: "5d021a01f852ee4ae01cf289" })
    .chain('exec')
    .resolves({});

    agent
    .delete('/events/5d021a01f852ee4ae01cf289')
    .end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.eql({});
      done();
    });
  });
});
