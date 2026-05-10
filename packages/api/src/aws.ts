import {S3Client} from '@aws-sdk/client-s3'
import {SQSClient} from '@aws-sdk/client-sqs'
import {SNSClient} from '@aws-sdk/client-sns'
import {LambdaClient} from '@aws-sdk/client-lambda'
import {DynamoDBClient} from '@aws-sdk/client-dynamodb'
import {CloudWatchLogsClient} from '@aws-sdk/client-cloudwatch-logs'
import {CloudWatchClient} from '@aws-sdk/client-cloudwatch'
import {AWS_ACCESS_KEY_ID, AWS_REGION, AWS_SECRET_ACCESS_KEY, FLOCI_ENDPOINT} from './config'

const region = AWS_REGION
const credentials = {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
}

const base = {region, credentials, endpoint: FLOCI_ENDPOINT, forcePathStyle: true}

export const s3 = new S3Client({...base, forcePathStyle: true})
export const sqs = new SQSClient(base)
export const sns = new SNSClient(base)
export const lambda = new LambdaClient(base)
export const dynamodb = new DynamoDBClient(base)
export const cwLogs = new CloudWatchLogsClient(base)
export const cw = new CloudWatchClient(base)
