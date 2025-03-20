const longitudeTimeApp = Vue.createApp({
	data() {
		return {
			city: '',
			longitude: 0,
		}
	},
	methods: {
		geolocate() {
			fetch(this.apiUrl, { headers: { 'X-Api-Key': apiKey } })
				.then(response => response.json())
				.then(data => { this.longitude = data[0].longitude; })
				.then(() => this.calculateOffset())
		}
	},
	computed: {
		apiUrl() {
			return `https://api.api-ninjas.com/v1/geocoding?city=${this.city}`;
		},
		offset() {
			return Math.floor(this.longitude / 15);
		}
	},
})

longitudeTimeApp.mount('#app')
