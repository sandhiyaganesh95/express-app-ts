import { Schema, model } from 'mongoose';
interface IUser { 
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
}
const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
  }
});
const user = model<IUser>('User', userSchema);
export default user;
