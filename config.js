var cfg = {
	
	port: process.env.VCAP_APP_PORT || 3000,
	
	
	
	
	meta: {
		description: "Sacramento Node.js, Web APIs and Cloud SaaS experts.",
		keywords: "sacramento, roseville, folsom, Node.js, web development, asp.net, node.js, c#, javascript"
	}

};



switch(process.env.NODE_ENV)
{
	case "production":
	case "staging":
	
	
	break;
	
	case "development":
	default:
	
	break;	
}

module.exports = cfg;
