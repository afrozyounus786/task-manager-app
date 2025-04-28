localStorage.clear();

const employees = [ 
  {
    "id": 1, "firstName": "Amit", "email": "employee1@example.com", "password": "123",
    "taskNumbers": { "active": 1, "new_task": 1, "completed_task": 1, "failed_task": 0 },
    "tasks": [
      {"title": "Develop Login System", "description": "Implement a secure login system with authentication.", "date": "2025-03-26", "category": "Development", "active": true, "new_task": true, "completed_task": false, "failed_task": false},
      {"title": "Fix UI Bugs", "description": "Resolve alignment and responsiveness issues in the dashboard.", "date": "2025-03-27", "category": "Testing", "active": false, "new_task": false, "completed_task": true, "failed_task": false}
    ]
  },
  {
    "id": 2, "firstName": "Priya", "email": "employee2@example.com", "password": "123",
    "taskNumbers": { "active": 1, "new_task": 0, "completed_task": 0, "failed_task": 0 },
    "tasks": [
      {"title": "Design New Landing Page", "description": "Create a visually appealing and user-friendly landing page.", "date": "2025-03-28", "category": "Design", "active": true, "new_task": false, "completed_task": false, "failed_task": false}
    ]
  },
  {
    "id": 3, "firstName": "Rohan", "email": "employee3@example.com", "password": "123",
    "taskNumbers": { "active": 1, "new_task": 1, "completed_task": 0, "failed_task": 0 },
    "tasks": [
      {"title": "Prepare Project Timeline", "description": "Draft a detailed timeline for the upcoming project phases.", "date": "2025-03-29", "category": "Management", "active": false, "new_task": true, "completed_task": false, "failed_task": false},
      {"title": "Research Market Trends", "description": "Analyze current market trends for better strategic planning.", "date": "2025-03-30", "category": "Research", "active": true, "new_task": false, "completed_task": false, "failed_task": false}
    ]
  },
  {
    "id": 4, "firstName": "Sneha", "email": "employee4@example.com", "password": "123",
    "taskNumbers": { "active": 1, "new_task": 0, "completed_task": 1, "failed_task": 1 },
    "tasks": [
      {"title": "Plan Social Media Campaign", "description": "Develop a content strategy for the next quarter.", "date": "2025-03-31", "category": "Marketing", "active": true, "new_task": false, "completed_task": true, "failed_task": true}
    ]
  },
  {
    "id": 5, "firstName": "Vikram", "email": "employee5@example.com", "password": "123",
    "taskNumbers": { "active": 1, "new_task": 1, "completed_task": 1, "failed_task": 1 },
    "tasks": [
      {"title": "Recruit New Interns", "description": "Review applications and schedule interviews for internship roles.", "date": "2025-04-01", "category": "HR", "active": false, "new_task": true, "completed_task": false, "failed_task": false},
      {"title": "Prepare Financial Report", "description": "Compile monthly revenue and expense reports for review.", "date": "2025-04-02", "category": "Finance", "active": true, "new_task": false, "completed_task": false, "failed_task": false},
      {"title": "Optimize Supply Chain", "description": "Identify bottlenecks in the supply chain and suggest improvements.", "date": "2025-04-03", "category": "Operations", "active": false, "new_task": false, "completed_task": true, "failed_task": true}
    ]
  }
];

const admin = [{
"id": 100, "firstName": "Rajesh", "email": "admin@example.com", "password": "123"
}];

  


export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employee = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return {employees , admin};
}