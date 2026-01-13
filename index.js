require('dotenv').config()
console.log(process.env) 
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const githubdata = {
  "login": "Poorvikaks",
  "id": 112681562,
  "node_id": "U_kgDOBrdiWg",
  "avatar_url": "https://avatars.githubusercontent.com/u/112681562?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Poorvikaks",
  "html_url": "https://github.com/Poorvikaks",
  "followers_url": "https://api.github.com/users/Poorvikaks/followers",
  "following_url": "https://api.github.com/users/Poorvikaks/following{/other_user}",
  "gists_url": "https://api.github.com/users/Poorvikaks/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Poorvikaks/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Poorvikaks/subscriptions",
  "organizations_url": "https://api.github.com/users/Poorvikaks/orgs",
  "repos_url": "https://api.github.com/users/Poorvikaks/repos",
  "events_url": "https://api.github.com/users/Poorvikaks/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Poorvikaks/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2022-09-02T05:30:08Z",
  "updated_at": "2024-05-01T08:27:49Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('poorvikaks')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at backend first project </h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>coding set </h2>')
})
app.get('/github', (req,res)=>{
  res.json(githubdata)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});