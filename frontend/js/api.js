var $ = require('jquery');
var Promise = require('../../backend/promise');


exports.getLocations = () => {
  return new Promise( (resolve, reject) => {
    $.ajax({
      url: '/api/locations',
      type: 'GET',
      dataType: 'json'
    })
    .done( (res) => resolve(res))
    .fail( (err) => reject(err));
  });
}

exports.getLatest = () => {
  return new Promise( (resolve, reject) => {
    $.ajax({
      url: '/api/measurements/latest',
      type: 'GET',
      dataType: 'json'
    })
    .done( (res) => resolve(res))
    .fail( (err) => reject(err));
  });
}

exports.postNew = (location, temp) => {
  return new Promise( (resolve, reject) => {
    $.ajax({
      url: '/api/measurements/',
      type: 'POST',
      data: {
        temperature: temp,
        location_id: location
      },
      dataType: 'json'
    })
    .done( (res) => resolve(res))
    .fail( (err) => reject(err));
  });
}