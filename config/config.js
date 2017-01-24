/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.2.136"],

	language: 'ar-jo',
	timeFormat: 24,
	units: 'metric',

	modules: [{
		module: 'alert',
	}, {
		module: "updatenotification",
		position: "top_bar"
	}, {
		module: 'clock',
		position: 'top_left'
	}, {
		module: 'calendar',
		header: 'US Holidays',
		position: 'top_left',
		config: {
			calendars: [{
				symbol: 'calendar-check-o ',
				url: 'https://www.google.com/calendar/ical/akvbisn5iha43idv0ktdalnor4%40group.calendar.google.com/public/basic.ics'
			}]
		}
	}, {
		module: 'compliments',
		position: 'lower_third',
		config: {
			interval: 1000,
			fadeInterval: 1000,
			compliments: {

				morning: [
					'صباح الخير ',
					'إستمتع بيومك',
					'كيف كان نومك'
				],
				afternoon: [
					'مرحباً',
					'تبدو رائعاً',
					'حالك جيد اليوم'
				],
				evening: [
					'واو، أنت رائع',
					'تبدو جميلاً',
					'أهلاً، كيف حالك'
				]
			}
		}
	}, {
		module: 'currentweather',
		position: 'top_right',
		header: 'Weather Forecast',
		config: {
			location: 'amman',
			locationID: '250441', //ID from http://www.openweathermap.org
			appid: '<you api key>'
		}
	}, {
		module: 'weatherforecast',
		position: 'top_right',
		header: 'Weather Forecast',
		config: {
			location: 'amman',
			locationID: '250441', //ID from http://www.openweathermap.org
			appid: '<you api key>'
		}
	}, {
		module: 'newsfeed',
		position: 'bottom_bar',
		config: {
			feeds: [{
				title: "New York Times",
				url: "http://www.france24.com/ar/top-stories/rss"
			},
			{
				title: "Aljazeera",
				url: "http://www.aljazeera.net/aljazeerarss/47e851f7-db55-45b6-8d9b-d54055bec967/0b6b9876-62a7-46b4-be20-8b77d302f9d7"
			}],
			showSourceTitle: true,
			showPublishDate: true
		}
	}, ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {
	module.exports = config;
}