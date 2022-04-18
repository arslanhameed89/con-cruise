import { Module } from '@nestjs/common';
import { ManualListCommand } from './manual.list.command';
import { ExitAppCommand } from './exit.app.command';

@Module({
  imports: [],
  controllers: [],
  providers: [ManualListCommand, ExitAppCommand],
  exports: [],
})
export class ConCommandModule {}
