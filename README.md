## Steps to Run Locally:

1. Follow steps 1-3 from the Notion API setup page: [Notion API Setup Page](https://developers.notion.com/docs/create-a-notion-integration)

2. In the `server` directory, create a file called `env.py` with the following content:
   ```python
   import os
   os.environ['token'] = '<your-secret-key>'
   os.environ['databaseID'] = '<your-database-id>'
3. Create a virtual environment in the server directory. For Mac, this is done with:<br>
    ```python3 -m venv venv```<br>
    ```source venv/bin/activate```
4. ```cd web```<br>
    ```npm run start```
The server and web page should run concurrently.