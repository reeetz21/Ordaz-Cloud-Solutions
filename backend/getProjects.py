import boto3
import os
import json

def lambda_handler(event, context):
    try:
        # Retrieve the table name and region from environment variables
        table_name = 'ProjectsTable'
        region_name = os.environ['AWS_REGION'] 

        # Initialize a DynamoDB client
        dynamodb = boto3.resource('dynamodb', region_name=region_name)
        table = dynamodb.Table(table_name)
        response = table.scan()
        projects = response['Items']

        # Prepare a successful response containing the projects
    return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                    'Access-Control-Allow-Methods': 'GET,OPTIONS',
                    'Content-Type': 'application/json'
                },
                'body': json.dumps(items)
            }
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                    'Access-Control-Allow-Methods': 'GET,OPTIONS',
                    'Content-Type': 'application/json'
                },
                'body': json.dumps({'error': str(e)})
            }
