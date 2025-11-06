// Fetch utility function
export async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  // let's take a look at the text of the response
  // console.log(await response.text());
  // console.log(response);
  // if it's not a 200 or .ok on the response
  // I don't want to parse the json.
  if (!response.ok) {
    throw new Error(`Request Failed with code${response.status}`);
  }

  const data = await response.json();
  return data;
}

// POST utility function
export async function postData(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    // let the server know that we are sending json.
    headers: {
      'Content-Type': 'application/json',
    },
    // we need to serialize the data
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`HTTP ${response.status} - ${text || response.statusText}`);
  }

  const data = await response.json();
  return data;
}
