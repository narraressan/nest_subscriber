import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { QUEUE_NAME, cast } from './utils';
import { ExamplePublisherInput } from './Message.dto';

@Processor(QUEUE_NAME)
export class MessageProcessor {
  @Process()
  async handler(job: Job) {
    const data = await cast(ExamplePublisherInput, job.data);

    if (data) {
      console.log(`Received: ${JSON.stringify(data)}`);

      // TODO
      return true;
    }
  }
}
