module.exports = {
       mongoUri: 'mongodb://localhost/myFirstNode',
       // or use 
       // mongoUri: 'mongodb://admin:password@localhost:27017/myFirstNode',
       mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
       debug: true,
       sessionSecret: 'dev_secret_key',
        google: {
              clientID: '879030678490-gev1k1m1irc8fc0bq1perd97bvhoa97n.apps.googleusercontent.com',
              clientSecret: 'FRVZgrWRG49I8g3FLC_m20f-',
              callbackURL: 'http://localhost:3000/oauth/google/callback'
       }

}
