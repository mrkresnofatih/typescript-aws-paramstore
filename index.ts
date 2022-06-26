import { SSM } from '@aws-sdk/client-ssm';

const ssm = new SSM({
    credentials: {
        accessKeyId: "accessKeyId",
        secretAccessKey: "secretAccessKey"
    },
    region: "region"
})

const getMyParam = () => {
    ssm.getParameter({ Name: "myparam" }, (e, data) => {
        if (e) {
            console.log('error: ', e)
        } else {
            const param = data?.Parameter?.Value;
            console.log(param);
        }
    })
}

getMyParam();
