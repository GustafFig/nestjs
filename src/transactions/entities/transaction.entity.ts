import {
  Model,
  Column,
  PrimaryKey,
  Table,
  DataType,
} from 'sequelize-typescript';

export enum TransactionType {
  CATEGROY1 = 'credit',
  CATEGROY2 = 'debit',
}

export const TransactionTypeList = Object.values(TransactionType);

@Table({
  tableName: 'transactions',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Transaction extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({ allowNull: false })
  type: TransactionType;

  @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
  amount: number;
}
