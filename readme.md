## Add
```bash
curl --header "Content-Type: application/json" \
     --request POST \
     --data '{"name":"John Doe","age":30}' \
     http://localhost:3000/people
```

## List
```bash
curl http://localhost:3000/people
```

## Update
```bash
curl \ 
    -X PUT http://localhost:3000/people/1 \ 
    -H 'Content-Type: application/json'  \
    -d '{"name": "John Doe", "age": 30}'
```

## Delete
```bash
curl -X DELETE http://localhost:3000/people/1
```
