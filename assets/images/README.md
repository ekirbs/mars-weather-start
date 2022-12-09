# mars-travel-start

## User Story

```
AS A traveler
I WANT to be able to submit my information to the website
SO THAT I can book my ticket to mars (add in a counter that will show arrival date/travel time depending on when I book the ticket)

I WANT to know the weather on mars at this time, plus what averages throughout the year
SO THAT I know what it might be like when I arrive

I WANT recent pictures of mars from the land rovers, telescopes, satellites, etc
SO THAT I know what the land looks like

I WANT to know about recent NASA news
SO THAT I know of any situations occurring in and around NASA and the space program that might affect my travel plans
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city



future features

cool header
resources on this planet (shows, museum exhibits, etc) about mars for the traveller to visit and learn (maybe based on location on earth...resources near you)

https://api.nasa.gov/

INSIGHT, MARS WEATHER SERVICE API:  GET https: //api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0

MARS ROVER PHOTOS: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY