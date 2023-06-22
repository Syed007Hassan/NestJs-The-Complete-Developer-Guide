import { Test, TestingModule } from '@nestjs/testing';
import { MessagesModule } from '../src/messages/messages.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('MessagesController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MessagesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/messages (GET)', () => {
    it('should return an array of messages', () => {
      return request(app.getHttpServer())
        .get('/messages')
        .expect(200)
        .expect((res) => {
          expect(res.body).toBeInstanceOf(Object);
        });
    });
  });

  describe('/messages (POST)', () => {
    it('should create a new message', () => {
      const message = { content: 'Hello, world!' };

      return request(app.getHttpServer())
        .post('/messages')
        .send(message)
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('id');
          expect(res.body.content).toEqual(message.content);
        });
    });
  });

  describe('/messages/:id (GET)', () => {
    it('should return a message by ID', async () => {
      const message = { content: 'Hello, world!' };
      const createdMessage = await request(app.getHttpServer())
        .post('/messages')
        .send(message)
        .expect(201);

      return request(app.getHttpServer())
        .get(`/messages/${createdMessage.body.id}`)
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('id');
          expect(res.body.content).toEqual(message.content);
        });
    });

    it('should return a 404 error if message is not found', () => {
      return request(app.getHttpServer())
        .get('/messages/999')
        .expect(404)
        .expect((res) => {
          expect(res.body.message).toEqual('message not found');
        });
    });
  });
});
