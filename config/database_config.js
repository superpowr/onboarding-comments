module.exports = {
 "development": {
   "username": "powruser",
   "password": null,
   "database": "powr_comments_onboarding_db",
   "host": "127.0.0.1",
   "dialect": "postgres"   
 },
 "test": {
   "username": "powruser",
   "password": null,
   "database": "powr_comments_onboarding_dbtest",
   "host": "127.0.0.1",
   "dialect": "postgres"
 },
 //LIVE we use use_env_variable
 "production": {
   "use_env_variable": process.env.DATABASE_URL,
   "username": "powruser",
   "password": null,
   "database": "powr_comments_onboarding_db",
   "host": "127.0.0.1",
   "dialect": "postgres"
 }
}