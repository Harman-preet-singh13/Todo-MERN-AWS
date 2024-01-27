// models/Task.js
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

AWS.config.update({
  region:'ap-south-1'
})


const dynamoDB = new AWS.DynamoDB.DocumentClient();


class Task {
  constructor(userId, title, description, dueDate) {
    this.userId = userId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  async save() {
    const taskId = uuidv4();
    const params = {
      TableName: 'taskManagement',
      Item: {
        userId: this.userId,
        taskId: taskId,
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
      },
    };

    try {
      await dynamoDB.put(params).promise();
      return params.Item;
    } catch (error) {
      console.error('Error saving task to DynamoDB', error);
      throw error;
    }
  }

  static async getUserTasks(userId) {
    const params = {
      TableName: 'taskManagement',
      IndexName: 'UserIdIndex', 
      KeyConditionExpression: 'userId = :userId',
      ExpressionAttributeValues: {
        ':userId': userId
      }
    };
    
    try {
      const result = await dynamoDB.query(params).promise();
      const userTasks = result.Items;
      console.log(userTasks);
      return userTasks;
    } catch (error) {
      console.error('Error fetching user tasks from DynamoDB', error);
      throw error;
    }
    
  }
}

module.exports = Task;
