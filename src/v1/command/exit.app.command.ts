import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { ConfigService } from '@nestjs/config';
import { kill, killer } from 'cross-port-killer';

@Injectable()
export class ExitAppCommand {
  constructor(private configService: ConfigService) {}
  @Command({
    command: 'exit',
    describe: 'exit the cli and rest of application',
  })
  async create(): Promise<void> {
    const port = this.configService.get<number>('app.PORT');
    await kill(port).then(pid => {
      console.log(pid);
    });
    process.exit(1);
  }
}
