import { searchData } from "./interface";
import mapResult from "./format"

export default async function apiSearch(searchString: string) {
  const result:searchData[] = []

  try {
    if (searchString.length > 0) {
      const data = await fetch('https://swapi.dev/api/' + searchString);
      const result = await data.json().then(data => mapResult(data.results, searchString));
      // console.log('data_1 =',  Array.isArray(data_1))
      return result
    } else {
      const endPoints = ["people", "planets", "films", "species", "vehicles", "starships"];
      const apiCalls = endPoints.map(endpoint => fetch('https://swapi.dev/api/' + endpoint))
      Promise.all(apiCalls).
        then(resp => {return resp}).
        then(resp => Promise.all(resp.map(data => data.json()))).
        then(resp => {
          resp.map((endpoint, index) => {
            console.log('apiSearchRes = ', result);
            result.push(...mapResult(endpoint.results, endPoints[index]))
            return result;
        })
      })
      return result
    }
  } catch (e) {
    console.log(`There was an error ${e} in API call process`);
  }



}