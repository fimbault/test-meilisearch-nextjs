# test nextjs + meilisearch

## nextjs
a basic nextjs starter is used, just to focus on retrieving data from meilisearch

## dependencies
we use docker meilisearch:v0.15.0 which you can view at http://localhost:7700

for simplicity reasons, I don't use a key to protect the test instance, but it can easily be added

if versions don't match, you may get an error (at least I had one MeiliSearchCommunicationError because I was using v0.15 for meilisearchjs and an outdated docker version)

i created an index movie 
```
curl \
  -X POST 'http://localhost:7700/indexes' \
  --data '{
    "uid": "movies",
    "primaryKey": "movie_id"
  }'
```

and documents like
```
curl \
  -X POST 'http://localhost:7700/indexes/movies/documents' \
  --data '[{
      "id": 287947,
      "title": "Shazam ⚡️",
      "genre": "comedy"
  }]'
```

and 
```
curl \
  -X POST 'http://localhost:7700/indexes/movies/documents' \
  --data '[{
      "id": 10048342,
      "title": "The queen's gambit",
      "genre": "drama"
  }]'
```
