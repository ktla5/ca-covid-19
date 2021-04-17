var lastUpdated = '';
var casesFile = 'https://raw.githubusercontent.com/datadesk/california-coronavirus-data/master/latimes-county-totals.csv';
var dateFormat = '%Y-%m-%d';
var stateName = 'California';

//Values that will help your tracker look good when people search and share
var meta_title = stateName+' COVID-19 Tracker';
var meta_twitter = '@KTLA';
var meta_url = 'https://deleonkr.github.io/app/montana/';
var meta_image = 'https://www.nexstar.tv/wp-content/uploads/2019/06/losAngeles_KTLA.jpg';
var meta_description = 'EXPLORE: COVID-19-related cases and deaths in your county, as well as a risk assessment for your county’s population.';
var meta_author = 'KTLA Digital Staff';
var meta_organization = 'KTLA 5 News';
var meta_org_logo = 'https://www.nexstar.tv/wp-content/uploads/2019/06/losAngeles_KTLA.jpg';
var ga_id = '';

//Content tha tis specific to your state's tracker
var dataSources = `
      <p>COVID-19 cases and deaths are based on data collected by the California Department of Public Health. Read more <a href="https://data.chhs.ca.gov/dataset/covid-19-time-series-metrics-by-county-and-state/resource/046cdd2b-31e5-4d34-9ed3-b48cdbc4be7a" target="_blank">about the data here</a>.</p>
      `;