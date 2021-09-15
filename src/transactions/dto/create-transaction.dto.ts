import { IsDecimal, IsNotEmpty, IsIn } from 'class-validator';
import {
  TransactionType,
  TransactionTypeList,
} from '../entities/transaction.entity';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsIn(TransactionTypeList)
  type: TransactionType;

  @IsDecimal()
  @IsNotEmpty()
  amount: number;
}
