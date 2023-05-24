import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    QuizModule,
    TypeOrmModule.forRoot(typOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 