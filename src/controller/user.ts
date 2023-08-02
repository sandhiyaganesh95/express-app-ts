import UserModel from '../model/user';
import { Request, Response } from 'express';
class UserController{
  //Create and save a new user
  async create(req: Request, res: Response) {
    try {
      const user = await UserModel.create(req.body);
      res.send({
        message: 'User created successfully',
        user: user
      });
    } catch(err: any)  {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.'
      })
    }
  }

  //Retrieve and return all users from the database
  async findAll(req: Request, res: Response) {
    try {
      const users = await UserModel.find();
      res.status(200).send(users);
    } catch(err: any) {
      res.status(404).json({message: err.message || 'User not found'});
    }
  };

  //Retrieve a user by id
  async findUser(req: Request, res: Response) {
    try {
      const user = await UserModel.findById(req.params.id);
      res.status(200).send(user);
    } catch(err: any) {
      res.status(404).json({message: err.message || 'User not found'});
    }
  };

  //Update a user by id
  async update(req: Request, res: Response) {
    try{
      if(!req.body) {
        res.status(400).send({
          message: 'Payload cannot be empty'
        });
      }
      const id = req.params.id;
      const user = await UserModel.findById(id);
      if (!user) { 
        res.status(404).send({message: 'User not found'})
      }
      await UserModel.findByIdAndUpdate(id, req.body)
      
    } catch(err: any) {
      res.status(500).send({
        message: err.message || 'Some error occurred while updating the User.'
      });
    }
  }

  //Delete a user by id
  async delete(req: Request, res: Response) {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      if(!user) {
        res.status(404).send({message: 'User not found'});
      } else {
        res.status(200).send({message: 'User deleted successfully'});
      }
    } catch(err: any){
      res.status(500).send({
        message: err.message || 'Some error occurred while deleting the User.'
      })
    }
  }
}
export default new UserController()