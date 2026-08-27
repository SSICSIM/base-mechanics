# services

Business logic that sits between API routers and the database/models. Keep
routers thin — parse/validate the request, delegate to a service function
here, return the response.
