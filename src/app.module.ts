import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { TasksService } from './tasks/tasks.service';
import { CallsModule } from './calls/calls.module';

@Module({
  imports: [OrdersModule, CallsModule],
  controllers: [AppController],
  providers: [AppService, TasksService],
})
export class AppModule {}
