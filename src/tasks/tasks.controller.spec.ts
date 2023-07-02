/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from 'src/dto/task.dto';

describe('TasksController', () => {
  let tasksController: TasksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    tasksController = app.get<TasksController>(TasksController);
  });

  // Testing GET getAllTasks()
  it('should return all tasks', () => {
    const mockTasks: Task[] = [
        { id: '1', title: 'Task 1', description: 'Description 1', dueDate: new Date() },
        { id: '2', title: 'Task 2', description: 'Description 2', dueDate: new Date() },
    ];      
    jest.spyOn(tasksController, 'getAllTasks').mockImplementation(() => mockTasks);
  
    const result = tasksController.getAllTasks();
  
    expect(result).toEqual(mockTasks);
  });
  //-----------------------------------------------------------------


});