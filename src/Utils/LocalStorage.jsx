const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Submit report",
                "task_description": "Complete and submit the monthly sales report.",
                "task_date": "2025-01-05",
                "category": "Reporting",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Team meeting",
                "task_description": "Attend the team meeting on project updates.",
                "task_date": "2025-01-03",
                "category": "Meetings",
                "active": true,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Inventory check",
                "task_description": "Perform an inventory check for the warehouse.",
                "task_date": "2025-01-04",
                "category": "Inventory",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Customer follow-up",
                "task_description": "Follow up with customers for feedback.",
                "task_date": "2025-01-06",
                "category": "Customer Service",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Website update",
                "task_description": "Update the product descriptions on the website.",
                "task_date": "2025-01-07",
                "category": "Development",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            },
            {
                "task_title": "Training session",
                "task_description": "Conduct training on the new CRM software.",
                "task_date": "2025-01-05",
                "category": "Training",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Budget planning",
                "task_description": "Prepare the annual budget proposal.",
                "task_date": "2025-01-10",
                "category": "Finance",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Client presentation",
                "task_description": "Present the new marketing strategy to the client.",
                "task_date": "2025-01-08",
                "category": "Presentation",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Data analysis",
                "task_description": "Analyze last quarter's sales data.",
                "task_date": "2025-01-09",
                "category": "Analysis",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Social media campaign",
                "task_description": "Plan the upcoming social media campaign.",
                "task_date": "2025-01-11",
                "category": "Marketing",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": true
            }
        ]
    }
];

const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return { employees, admin }

}
