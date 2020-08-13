**a sample project for GraphqlClient (and error-boudry)**

I used @apollo/client
this library has:
 - cache
 - refetch 
 - polling base on interval

 good docs:
  - https://www.apollographql.com/docs/react/get-started/
  - https://reactjs.org/docs/error-boundaries.html
  - a fake graphql server : https://anilist.co/graphiql

in this project we have an error-boundry component, so error in all its children(not itself) will be catched.
note: in development mode, you will see the stack, but it is not part of the dom 

Where to Place Error Boundaries:
The granularity of error boundaries is up to you. You may wrap top-level route components to display a “Something went wrong” message to the user, just like server-side frameworks often handle crashes. You may also wrap individual widgets in an error boundary to protect them from crashing the rest of the application.

Error boundaries do not catch errors for:
 - Event handlers (learn more)
 - Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
 - Server side rendering
 - Errors thrown in the error boundary itself (rather than its children)