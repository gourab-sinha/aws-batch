var AWS = require("aws-sdk");

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
});
AWS.config.region = 'ap-south-1';
// console.log("Region: ", AWS.config);

const Batch = new AWS.Batch();

let jobData = {};
const job = Batch.submitJob({
    jobQueue: 'batch-test',
    jobName: 'job-test-5',
    jobDefinition: 'batch-test',
}, (err, data)=> {
    // console.log(err, data);
    jobData = data;
    console.log('JOB ID',jobData.jobId);

    // const getJobDetails = Batch.listJobs({
    //   jobQueue: 'batch-test',
    //   arrayJobId: [jobData.jobId],
    //   jobStatus: 'SUCCEEDED',
    //   maxResults: 5
    // });
    
    // console.log(getJobDetails);
});
// console.log(jobData.jobId);
// const getJobDetails = Batch.listJobs({
//   jobQueue: 'batch-test',
//   arrayJobId: ['bd16fbf1-d32d-4f66-a8d8-4d0beeb0530b'],
//   jobStatus: 'SUCCEEDED',
//   maxResults: 5
// });

console.log(getJobDetails);
