import { readFile, writeFile } from 'fs';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const messages = JSON.parse(data);

      if (messages[id]) {
        return messages[id];
      }
      return `Message ${id} not found`;
    });
  }

  async findAll() {}

  async createMessage(message: string) {
    return `Message ${message} created`;
  }
}
