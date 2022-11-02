
const appSyncUrl =  "https://eyagdjtjdbhynpawmla4d7aony.appsync-api.us-east-2.amazonaws.com/graphql";
const apiKey = "da2-7aflxvnirvcpbngkjhr22g72xe";

const { request } = require('./appsyncRequest');
const { listTransactions } = require('./graphql/queries');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    try {
        const result = await request(
            {
                query: listTransactions,
                operationName: 'ListTransactions',
            },
            appSyncUrl,
            apiKey,
        );

        console.log('Graph QL Result: ' + JSON.stringify(result));

        const balance = result.data.listTransactions.items.reduce((balance, { amount }) => (balance + amount), 0);
        return {
            statusCode: 200,
            //  Uncomment below to enable CORS requests
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            }, 
            body: JSON.stringify(balance),
        };
    } catch(e) {
        console.log(e);
        return {
            statusCode: 503,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            }, 
        }
    }
};
