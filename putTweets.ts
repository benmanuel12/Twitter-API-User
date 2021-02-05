export async function putTweets(dataArray: Array<string>[]){
    let AWS = require("aws-sdk");
    
    AWS.config.update({
        region: "us-east-1",
        endpoint: "https://dynamodb.us-east-1.amazonaws.com"
    });

    for (let i = 0; i < dataArray.length; i++) {
        let documentClient = new AWS.DynamoDB.DocumentClient();

        let params = {
            TableName: "TweetData",
            Item: {
                TweetID: dataArray[i][0],
                TweetText: dataArray[i][1],
                Location: dataArray[i][2]
            }
        };

        // let result: any = await documentClient.put(params).promise()
        // console.log(result)

        documentClient.put(params, (err: any, data: any) => {
            if (err) {
                console.error("Unable to add item")
                console.error("Error JSON:", JSON.stringify(err))
            }
            else {
                console.log("Weather added to table:", params.Item)
            }
        })
    }
    
}