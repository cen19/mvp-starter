1. Client sends information to the Express Server
  .. the information sent is the input bar that contains the ingredients
  .. -- Remember to format the data correctly 
  .. --   default url encoded should be fine
  .. POST method

2. Express received the POST request
  .. should let the client know if it was received
  .. 1. Use JSON bodyParser to parse the incoming data
  .. The server should then use that incoming data to form a query
  .. call the food2fork API and tell mongoose to store the data in MongoDB

  .. Try to have it so that when the data is recevied from API
    .. send it back to the client 