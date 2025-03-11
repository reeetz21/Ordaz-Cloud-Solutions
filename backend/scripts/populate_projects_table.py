import boto3
from datetime import datetime

def create_projects_table_items():
    # Initialize DynamoDB resource
    dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
    table = dynamodb.Table('ProjectsTable')
    
    # List of projects/blogs to add
    projects = [
        {
            "project_id": "1",  # Generate unique ID
            "title": "Building a Serverless Portfolio with AWS",
            "description": "How I built this portfolio website using AWS Lambda, API Gateway, and DynamoDB",
            "date": "2025-03-11",
            "technologies": ["AWS Lambda", "API Gateway", "DynamoDB", "React", "Python"],
            "category": "Cloud Computing",
            "content": {
                "introduction": "In this blog post, I'll share my journey of building a serverless portfolio website...",
                "sections": [
                    {
                        "title": "Architecture Overview",
                        "content": "The application uses a serverless architecture with the following components..."
                    },
                    {
                        "title": "Implementation Details",
                        "content": "Here's how I implemented each component..."
                    }
                ],
                "conclusion": "This project taught me valuable lessons about serverless architecture..."
            },
            "image_url": "https://XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/portfolio-architecture.png",
            "github_url": "https://github.com/yourusername/portfolio-project",
            "live_url": "https://your-portfolio-url.com",
            "status": "published",
            "last_updated": datetime.now().isoformat()
        },
        
    ]
    
    # Add items to DynamoDB table
    with table.batch_writer() as batch:
        for project in projects:
            try:
                batch.put_item(Item=project)
                print(f"Successfully added project: {project['title']}")
            except Exception as e:
                print(f"Error adding project {project['title']}: {str(e)}")

def main():

    try:
        create_projects_table_items()
        print("Successfully populated ProjectsTable")
    except Exception as e:
        print(f"Error populating table: {str(e)}")

if __name__ == "__main__":
    main()
