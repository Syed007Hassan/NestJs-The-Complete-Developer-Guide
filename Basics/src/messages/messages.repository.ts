import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const data = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(data);

    if (messages[id]) {
      return messages[id];
    }
    return `Message ${id} not found`;
  }

  async findAll() {
    const data = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(data);

    return messages;
  }

  async createMessage(message: string) {
    const data = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(data);

    const id = Math.floor(Math.random() * 999);
    messages[id] = message;

    const json = JSON.stringify(messages);

    await writeFile('messages.json', json, 'utf8');

    console.log('Message saved');
  }
}
