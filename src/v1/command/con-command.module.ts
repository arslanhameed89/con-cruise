import { Module } from '@nestjs/common';
import { ManualListCommand } from './manual.list.command';

@Module({
  imports: [],
  controllers: [],
  providers: [ManualListCommand],
  exports: [ManualListCommand],
})
export class ConCommandModule {}
