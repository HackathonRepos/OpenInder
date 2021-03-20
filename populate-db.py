import os, hashlib, firebase_admin
from github import Github
from firebase_admin import credentials
from firebase_admin import firestore

def gen_api_token():
    f = open('.env', 'r')
    api_token = f.readlines()[6].split("=")[1]
    f.close()
    return api_token

g = Github(gen_api_token())

keywords = ["open source", "open-source"]

query = '+'.join(keywords) + '+in:readme+in:description'
result = g.search_repositories(query, 'stars', 'desc')
max_repos = 2

print(f'Found {result.totalCount} repo(s)')

repos = 0


os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="secret.json"
cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred)

db = firestore.client().collection("projects")

for repo in result:
    if repos < max_repos:
        doc = db.document(hashlib.sha1(bytes(repo.name, 'utf-8')).hexdigest())
        data = {
            "contributors": int(repo.get_contributors().totalCount),
            "creator": str(repo.owner.login),
            "url": str(repo.clone_url),
            "lang": str(repo.language),
            "desc": str(repo.description),
            "name": str(repo.name)
        }
        if doc.get().to_dict() != data:
            print(f"Added {data['name']}")
            doc.set(data)
            repos += 1
    else:
        break
