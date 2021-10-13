import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.modules';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://dbUser:<password>@cluster-shopapi.jlinf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
