import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class ManualListCommand {
  @Command({
    command: 'manual:help',
    describe: 'help command to show list of commands',
  })
  async create() {
    console.info(
      'npx nestjs-command <command>\n' +
        '\n' +
        'command:\n' +
        '  npx nestjs-command seed:customer  Seed Customer Data\n' +
        '  npx nestjs-command list:customer  list all existing Customers\n' +
        '  npx nestjs-command seed:driver    Seed Drivers Data\n' +
        '  npx nestjs-command list:cruiser   list all existing drivers\n' +
        '  npx nestjs-command list:match     match drivers by algo\n' +
        '  npx nestjs-command manual:help    to list all commands and args\n' +
        '  npx nestjs-command exit           exit the cli and rest of application\n' ,
    );
    process.exit(1);
  }
}
