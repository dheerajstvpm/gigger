const AWS = require('aws-sdk')
const fs = require('fs');

const s3 = new AWS.S3({
    accessKeyId: process.env.S3Accesskey,
    secretAccessKey: process.env.S3SecretAccessKey
})


    // const filename = 'the-file-name'
    // const fileContent = fs.readFileSync(fileName)

    // const params = {
    //     Bucket: process.env.S3BucketName,
    //     Key: `${filename}.jpg`,
    //     Body: fileContent
    // }

    // s3.upload(params, (err, data) => {
    //     if (err) {
    //         reject(err)
    //     }
    //     resolve(data.Location)
    // })

    (async () => {
        await s3.
            putObject({
                Body: "hello world",
                Bucket: process.env.S3BucketName,
                Key: "my-file.txt"
            }).promise();
    })();

    const url=`process.env.S3ObjectURL${my-file.txt}`
//-------------------------

const fs = require('fs');
const fileUpload = require('express-fileupload');

export function onFileupload(req, res) {

    let file = req['files'].image;
  
    console.log("File uploaded: ", file.name);
  }

