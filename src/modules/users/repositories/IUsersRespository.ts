import User from '../infra/typeorm/entities/User';
import iCreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUsersRespository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: iCreateUserDTO): Promise<User>;
  save(data: User): Promise<User>;
}
