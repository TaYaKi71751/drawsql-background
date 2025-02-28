
(async () => {
	const changeBackground = async () => {
		let color = '#FFFFFF';
		document.querySelectorAll('rect[width="1"][height="1"]').forEach((element) => { element.setAttribute('fill',color); });
		document.querySelectorAll('div[class="joint-paper-scroller joint-theme-modern"]').forEach((element) => { element.setAttribute('style',`background-color: ${color} !important`); });
	};
			const events = Object.keys(document.__proto__.__proto__).reduce((arr, event)=> { // https://stackoverflow.com/questions/39963850/how-can-i-add-an-event-listener-for-all-events-in-javascript-without-listing-the
				if(event.startsWith('on')) return [...arr, event.substr(2)];
				return arr;
			}, []);
				events.forEach(async (event) => {
					document.addEventListener(event,changeBackground);
				});
				setUrl();
		})();
