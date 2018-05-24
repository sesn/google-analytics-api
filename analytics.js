const {
    google
} = require('googleapis');
const key = require('./projects-service.json');
const VIEW_ID = 'TABLE_ID';

let jwtClient = new google.auth.JWT(
    key.client_email, null, key.private_key, ['https://www.googleapis.com/auth/analytics.readonly'], null
);

jwtClient.authorize(function (err, tokens) {
    if (err) {
        console.log(err);
        return;
    }

    let analytics = google.analytics('v3');
    queryRealTimeData(analytics);
});


function queryRealTimeData(analytics) {
    analytics.data.realtime.get({
        'auth': jwtClient,
        'ids': VIEW_ID,
        'metrics': ['rt:activeUsers']
    }, function (err, response) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(JSON.stringify(response.data, null, 4))
    })
}


function queryData(analytics) {
    analytics.data.ga.get({
        'auth': jwtClient,
        'ids': VIEW_ID,
        'metrics': 'rt:activeUsers',
        'start-date': 'today',
        'end-date': 'today'
    }, function (err, response) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(JSON.stringify(response.data, null, 4));
    });
}