// Fetch utility function
// This will get data at a given endpoint.
// async turns this into a promise
// a promise can be fulfilled or rejected

export async function getData(endpoint) {
  // you're going to await the request that's going
  // over the network
  const response = await fetch(endpoint, {
    method: 'GET',
  });
  console.log('response', response);
  // the above is making the request
  // we want to throw an error if it's anything but 200s
  // on the response there's response.ok to tell us this
  if (!response.ok) {
    throw new Error('Network response failed');
  }
  // on the response we can't guarantee that the json
  // is well formed, there's a method as well await
  // which converting the json to a js object
  const data = await response.json();
  console.log('data', data);
  return data;
}

// POST utility function
export async function postData(endpoint, payload) {
  // make the post request
  const response = await fetch(endpoint, {
    method: 'POST', // we're creating new info on the server
    headers: {
      'Content-Type': 'application/json',
      // this give info to the server that we're giving json
      // this is going to be you'll pass tokens (for auth)
    },
    body: JSON.stringify(payload),
    // what you're giving to the server
  });
  // check if ti was okay.
  if (!response.ok) {
    throw new Error('Network response failed');
  }
  // on the response we can't guarantee that the json
  // is well formed, there's a method as well await
  // which converting the json to a js object
  const data = await response.json();
  return data;
}

// TODO: Add DELETE function here
