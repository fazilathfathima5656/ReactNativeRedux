//If environments are more like dev, qa, intigration, staging and production
// we need to choose paths based on environment
// but currently hardcoding to dev only

const rootpath = 'http://firstmed.azurewebsites.net/api/GetArticles';

export default {
  ...rootpath,
};
