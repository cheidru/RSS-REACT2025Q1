import { searchData } from '../services/interface';

export default function mapResult(data: [], searchString: string) {
  const pattern: searchData = formatResult(searchString);
  const result: searchData[] = data.map((item: object) => ({
    title: `${pattern.title}: ${item[pattern.title as keyof object]}`,
    param1: `${pattern.param1}: ${item[pattern.param1 as keyof object]}`,
    param2: `${pattern.param2}: ${item[pattern.param2 as keyof object]}`,
    param3: `${pattern.param3}: ${item[pattern.param3 as keyof object]}`,
    param4: `${pattern.param4}: ${item[pattern.param4 as keyof object]}`,
  }));
  return result;
}

function formatResult(searchStr: string) {
  let result: searchData = {
    title: '',
    param1: '',
    param2: '',
    param3: '',
    param4: '',
  };
  switch (searchStr) {
    case 'people':
      result = {
        title: 'name',
        param1: 'height',
        param2: 'mass',
        param3: 'birth_year',
        param4: 'gender',
      };
      break;
    case 'planets':
      result = {
        title: 'name',
        param1: 'rotation_period',
        param2: 'climate',
        param3: 'gravity',
        param4: 'population',
      };
      break;
    case 'films':
      result = {
        title: 'title',
        param1: 'episode_id',
        param2: 'director',
        param3: 'producer',
        param4: 'release_date',
      };
      break;
    case 'species':
      result = {
        title: 'name',
        param1: 'classification',
        param2: 'designation',
        param3: 'average_lifespan',
        param4: 'language',
      };
      break;
    case 'vehicles':
      result = {
        title: 'name',
        param1: 'manufacturer',
        param2: 'cost_in_credits',
        param3: 'max_atmosphering_speed',
        param4: 'crew',
      };
      break;
    case 'starships':
      result = {
        title: 'name',
        param1: 'manufacturer',
        param2: 'cost_in_credits',
        param3: 'max_atmosphering_speed',
        param4: 'crew',
      };
      break;
    case '':
      result = {
        title: 'name',
        param1: 'manufacturer',
        param2: 'cost_in_credits',
        param3: 'max_atmosphering_speed',
        param4: 'crew',
      };
      break;
  }
  return result;
}
