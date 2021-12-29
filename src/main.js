import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Baran Kaya',
		position: 'Software Engineer @ Kentkart',
		location: 'Izmir/Turkey',
		githubHandle: 'barankaya',
		linkedinHandle: 'barankayaa',
		summary: 'I have almost 8 years of experience. I have an open personality for improvement. I love following new technologies, and enjoy writing code. Currently, I\'m working as a Software Engineer at Kentkart.'
	}
});

export default app;
