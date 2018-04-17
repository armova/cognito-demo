## Just watch a small Cognito demo:
[Signup demo just from the backend with email confirmation and redirection:](
https://xteamintegrationtesting.auth.us-east-1.amazoncognito.com/signup?response_type=token&client_id=4flhu2hgtmm513v1haiab76bvn&redirect_uri=https://www.beachbodyondemand.com/)

[Deployed Signup demo from this app:](http://xteamintegrationtest-hosting-mobilehub-1813410687.s3-website-us-east-1.amazonaws.com/)
Password min length: 6
Open browser console to see result user from Cognito

## Setup
- Clone the repo

- Install and Configure aws cli. 
https://docs.aws.amazon.com/cli/latest/userguide/installing.html
In MAC is better to just use brew to install Python & pip

### To just run this app:
You will need to create a file `src/config.js` and ask @Arnoldo to PM you some valid keys for it and the steps to configure the aws cli credentials and the buckets references in the scripts for this project. Those are required to be able to run npm run predeploy and download a `src/aws-export.js` file needed to sync with the Mobile Hub Console.

src/config.js
```js
export default {
  UserPoolId: '',
  ClientId: '',
}
```

### Run with your own AWS services

- Once you have aws cli configured:

-  Create the cloud backend in AWS Mobile Hub Console
You don't need to create a new app just update the values in this one as described in [this guide](https://aws.amazon.com/blogs/mobile/deploy-a-react-app-to-s3-and-cloudfront-with-aws-mobile-hub/)

- Integrate aws-sdk
[AWS SDK JS guide](https://aws.amazon.com/blogs/mobile/integrate-the-aws-sdk-for-javascript-into-a-react-app/)

- From your Mobile Hub Console go to reosurces, access your Amazon Cognito Identity Pools 
Follow [this instructions and update values in src/config.js](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-as-user-directory.html)
