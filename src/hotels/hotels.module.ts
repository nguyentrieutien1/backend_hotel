import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';

@Module({
  imports: [],
  controllers: [HotelsController],
  providers: [HotelsService]
})
export class HotelsModule {}
