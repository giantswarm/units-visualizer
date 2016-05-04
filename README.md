To start the server run: `make`

POST /message
-------------
Header `Content-type: application/json` must be set.
Example post requests to /message:

Add a unit
```
{
  "increment": 1
}
```

Remove a unit
```
{
  "increment": -1
}
```

Set total units to 1
```
{
  "setTotal": 1
}
```