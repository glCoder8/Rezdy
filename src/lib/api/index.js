async function request(url, method, parameters) {
  let queryURL = '';
  let params = {};
  try {
    queryURL = `http://www.mocky.io/v2/${url}`;
    const body = JSON.stringify(parameters);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    params = { headers, method };
    if (method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT' || method.toUpperCase() === 'DELETE') {
      params.body = body;
    }
    const response = await fetch(queryURL, params);
    let ret = await response.json();
    console.log('result = ', ret);
    if (response.status >= 400) {
      ret.error = true;
    }
    return ret;
  } catch (err) {
    console.error(`api error: ${queryURL}, param: ${JSON.stringify(params)}`, err);
    return { error: err };
  }
}

export async function getRecipes() {
  return request('5c85f7a1340000e50f89bd6c', 'GET');
}

export async function getIngredients() {
  return request('5c873e91320000f70c3bd0cf', 'GET');
}