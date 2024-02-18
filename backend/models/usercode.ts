import { Schema, model, connect } from 'mongoose';


interface IUserCode {
  theme: string;
  language : string;
  code: string;
}

const userCodeSchema = new Schema<IUserCode>({
  theme: { type: String, required: true },
  language: { type: String, required: true },
  code: String
});

const UserCode = model<IUserCode>('UserCode', userCodeSchema);

export default UserCode;