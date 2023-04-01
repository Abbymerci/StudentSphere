const {google} = require('googleapis');
const {JWT} = require('google-auth-library');

const credentials = require('./credentials.json');
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

const client = new JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: SCOPES
});

async function listUnreadMessages() {
  const gmail = google.gmail({version: 'v1', auth: client});
  const res = await gmail.users.messages.list({
    userId: 'me',
    q: 'is:unread'
  });
  console.log(res.data);
}

listUnreadMessages();
