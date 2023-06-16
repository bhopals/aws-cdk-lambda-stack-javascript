### S3 AWS CLI Commands

aws s3api put-bucket-lifecycle-configuration \
 --lifecycle-configuration '{"Rules":[{
"ID":"empty-bucket",
"Status":"Enabled",
"tags": [],
"Prefix":"",
"Expiration":{"Days":1},
"NoncurrentVersionExpiration":{"NoncurrentDays":1}
}]}' \
 --bucket YOUR-BUCKET

aws s3api delete-bucket --bucket YOUR-BUCKET

aws cloudformation delete-stack --stack-name CDKToolkit

aws s3 ls | grep cdk-hnb # copy the name

aws s3 rb --force s3://<name> # <replace the name here>
