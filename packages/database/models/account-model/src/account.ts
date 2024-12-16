/** Dependencies */
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  Default
} from 'sequelize-typescript';

/** Create the model table */
@Table({
  tableName: 'Accounts',
  timestamps: true,
  freezeTableName: true
})
export class Account extends Model<Account> {
  /** The name of the account */
  @Column
  name!: string;

  /** Hashed password of the account, or null if no password */
  @AllowNull
  @Column
  hashedPassword?: string;

  /** Salt used for the password */
  @AllowNull
  @Column
  salt?: string;

  /** Default selected audio language */
  @Column
  defaultAudioLanguage!: string;

  /** Default selected subtitle language */
  @Column
  defaultSubtitleLanguage!: string;

  /** Is the auto selection for audio enabled? */
  @Default(true)
  @Column
  autoSelectAudio!: boolean;

  /** Is the auto selection for subtitle enabled? */
  @Default(true)
  @Column
  autoSelectSubtitle!: boolean;
}
