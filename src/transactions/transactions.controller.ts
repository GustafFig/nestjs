import { TransactionsService } from './transactions.service';
import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  // O Body permite vlidações do dto (DATA TRANSFER)
  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }
}
