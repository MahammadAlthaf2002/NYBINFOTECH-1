export default function About(){return <section className="page-title about"><p className="eyebrow">ABOUT THIS PROJECT</p><h1>What are we practicing?</h1><div className="concepts">{[
["BrowserRouter","Wraps the app and enables browser-based routing."],
["Routes + Route","Matches a URL and renders the correct component."],
["Static Routing","Fixed URLs such as /about and /products."],
["Dynamic Routing","One route /products/:id handles many product IDs."],
["Link + NavLink","Link navigates; NavLink also knows the active route."],
["useNavigate","Navigate with JavaScript after a click or action."],
["Nested Routes","Dashboard child pages render through Outlet."],
["Protected Route","Checks login before showing the dashboard."],
["404 Route","path='*' handles unknown URLs."]
].map(([a,b])=><article className="concept-card" key={a}><h3>{a}</h3><p>{b}</p></article>)}</div></section>}