import { useEffect, useState } from 'react'
import { getUsers } from './services/userApi.js'

const lessons = [
  ['Testing basics', 'A component test checks what a person can see and do.'],
  ['Vitest or Jest', 'A test runner finds tests, runs them, and reports pass or fail.'],
  ['React Testing Library', 'Test the page by finding accessible text, labels, and roles.'],
  ['Rendering components', 'render(<Component />) puts the component on a test page.'],
  ['User interactions', 'userEvent can click buttons and type into fields.'],
  ['Forms and validation', 'Test useful feedback for missing or invalid information.'],
  ['Conditional rendering', 'Check the UI for each important state or condition.'],
  ['Mocking API requests', 'A mock gives the component a predictable server response.'],
  ['Loading and error states', 'A request can show loading, success, or an error message.'],
  ['Integration testing', 'Test a user journey across connected pieces of the app.'],
  ['Vite production build', 'vite build creates optimized files in the dist folder.'],
  ['Build and environment config', 'Vite reads VITE_ variables from environment files.'],
  ['Deployment preparation', 'Build, check the dist folder, and configure your hosting provider.'],
  ['Git branches and pull requests', 'Use a branch for a change and a pull request to request review.'],
  ['README and documentation', 'Explain what the project does and how to install, run, and test it.'],
]

const examples = [
`function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>
}

// Welcome.test.jsx
render(<Welcome name="Mia" />)
expect(screen.getByRole('heading', { name: 'Hello, Mia!' })).toBeInTheDocument()`,
`// Vitest is a test runner that works with Vite.
// vite.config.js
import { defineConfig } from 'vitest/config'
export default defineConfig({ test: { environment: 'jsdom' } })

// Run all tests once:
// npm test`,
`render(<button>Save</button>)
const saveButton = screen.getByRole('button', { name: 'Save' })
expect(saveButton).toBeEnabled()
// Prefer getByRole, getByLabelText, and visible text.`,
`function Greeting() {
  return <h1>Welcome back</h1>
}

render(<Greeting />)
expect(screen.getByRole('heading', { name: 'Welcome back' }))
  .toBeInTheDocument()`,
`const user = userEvent.setup()
render(<button onClick={save}>Save</button>)
await user.click(screen.getByRole('button', { name: 'Save' }))
expect(screen.getByText('Saved!')).toBeInTheDocument()`,
`await user.click(screen.getByRole('button', { name: 'Join' }))
expect(screen.getByRole('alert'))
  .toHaveTextContent('Email is required')
await user.type(screen.getByLabelText('Email'), 'mia@example.com')
await user.click(screen.getByRole('button', { name: 'Join' }))
expect(screen.getByText('Welcome, Mia!')).toBeInTheDocument()`,
`function Status({ loggedIn }) {
  return loggedIn ? <p>Welcome!</p> : <p>Please sign in</p>
}

const { rerender } = render(<Status loggedIn={false} />)
expect(screen.getByText('Please sign in')).toBeInTheDocument()
rerender(<Status loggedIn />)
expect(screen.getByText('Welcome!')).toBeInTheDocument()`,
`// userApi.js is replaced with a predictable fake.
vi.mock('./userApi.js', () => ({
  getUsers: vi.fn().mockResolvedValue([
    { id: 1, name: 'Ari' }
  ])
}))

render(<UserDirectory />)
expect(await screen.findByText('Ari')).toBeInTheDocument()`,
`// UI can show three request states:
if (loading) return <p role="status">Loading…</p>
if (error) return <p role="alert">Could not load data</p>
return <p>{data.name}</p>

expect(screen.getByRole('status')).toBeInTheDocument()
expect(await screen.findByText('Ari')).toBeInTheDocument()`,
`render(<AddTaskForm />)
await user.type(screen.getByLabelText('Task'), 'Read')
await user.click(screen.getByRole('button', { name: 'Add task' }))
expect(screen.getByText('Read')).toBeInTheDocument()
// This checks the form, handler, and list together.`,
`// package.json scripts
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}

// Make optimized files in dist/
npm run build`,
`// .env.local (public values only)
VITE_API_URL=https://example.com/api

// In React code
const apiUrl = import.meta.env.VITE_API_URL

// Never store secret keys in VITE_ variables.`,
`npm run build
npm run preview

// Upload the dist/ folder to your static host.
// Build command: npm run build
// Publish directory: dist
// Add an index.html fallback for client routes.`,
`git switch -c feature/add-component-tests
git add .
git commit -m "Add component tests"
git push -u origin feature/add-component-tests

// Open a pull request on GitHub for review.`,
`# React Testing Practice Lab

A beginner React project for learning component tests.

## Start
npm install
npm run dev

## Test and build
npm test
npm run build`
]
const labs = [
{task:'Write a test for a welcome component.',steps:['Create Welcome.jsx with a name prop.','Render it in a test and find the heading by its accessible name.','Assert the welcome message is visible.'],file:'src/Welcome.test.jsx',run:'npm test'},
{task:'Run a focused Vitest test and read its result.',steps:['Open src/App.test.jsx.','Run the tests and find the rendering test.','Change the expected heading, rerun, then restore it.'],file:'src/App.test.jsx',run:'npm test'},
{task:'Find a button by its accessible role and name.',steps:['Render a button named Save.','Find it with getByRole and its name.','Check that it is enabled.'],file:'src/App.test.jsx',run:'npm test'},
{task:'Render a small component and check its heading.',steps:['Create Greeting.jsx that returns an h1.','Render it with render(<Greeting />).','Find the heading by role and name.'],file:'src/App.test.jsx',run:'npm test'},
{task:'Practice a click and confirm the page changed.',steps:['Use userEvent.setup() in an async test.','Click Add task on this page.','Check the new task appears in the list.'],file:'src/App.test.jsx',run:'npm test'},
{task:'Try the task form with invalid and valid input.',steps:['Submit while empty and read the validation message.','Enter a task and submit again.','Confirm the task appears and the input clears.'],file:'src/App.jsx and src/App.test.jsx',run:'npm test'},
{task:'Check both branches of a conditional component.',steps:['Create Status with a loggedIn prop.','Check the sign-in message when false.','Rerender true and check the welcome message.'],file:'src/App.test.jsx',run:'npm test'},
{task:'Replace the real server with a predictable mock.',steps:['Find vi.mock for the userApi module.','Change the fake learner name.','Check the UI displays it without the network.'],file:'src/App.test.jsx',run:'npm test'},
{task:'Verify loading, success, and error UI states.',steps:['Keep a promise pending and check the loading message.','Resolve with a fake learner and check its name.','Reject and check the helpful error message.'],file:'src/App.test.jsx',run:'npm test'},
{task:'Test one complete form-to-list journey.',steps:['Render the app.','Type a task into the labeled form and submit it.','Check the new task in the list.'],file:'src/App.test.jsx',run:'npm test'},
{task:'Create and inspect a production build.',steps:['Run the build command.','Find index.html and assets in dist/.','Start preview and inspect the built page.'],file:'package.json and dist/',run:'npm run build, then npm run preview'},
{task:'Add a public Vite environment setting.',steps:['Create .env.local with VITE_API_URL=https://example.com/api.','Read it using import.meta.env.VITE_API_URL.','Restart Vite; never place secrets in VITE_ variables.'],file:'.env.local and src/',run:'npm run dev'},
{task:'Prepare the project for a static host.',steps:['Build the app and check dist/.','Set host build command to npm run build.','Set publish folder to dist; add an index.html fallback for client routes.'],file:'README.md and host settings',run:'npm run build'},
{task:'Make a Git branch and prepare a pull request.',steps:['Create a feature branch.','Commit your lesson change on that branch.','Push it and write a PR summary with test results.'],file:'Git repository',run:'git switch -c feature/react-testing-practice'},
{task:'Write a README another beginner can follow.',steps:['Describe what the app teaches.','Document install, dev, test, build, and preview commands.','Read it from top to bottom to check the steps.'],file:'README.md',run:'Review the README instructions'}
]
function TaskForm({ onAdd }) {
  const [task, setTask] = useState('')
  const [error, setError] = useState('')
  function submit(event) {
    event.preventDefault()
    if (!task.trim()) { setError('Please enter a task.'); return }
    onAdd(task.trim())
    setTask('')
    setError('')
  }
  return <form className="task-form" onSubmit={submit} noValidate>
    <label htmlFor="task">New practice task</label>
    <div className="form-row"><input id="task" value={task} onChange={e => setTask(e.target.value)} placeholder="Example: Test a button" aria-describedby={error ? 'task-error' : undefined} />
      <button type="submit">Add task</button></div>
    {error && <p id="task-error" role="alert">{error}</p>}
  </form>
}

function UserDirectory() {
  const [state, setState] = useState({ status: 'loading', users: [], error: '' })
  useEffect(() => {
    let active = true
    getUsers().then(users => { if (active) setState({ status: 'success', users, error: '' }) })
      .catch(() => { if (active) setState({ status: 'error', users: [], error: 'Could not load learners. Please try again.' }) })
    return () => { active = false }
  }, [])
  if (state.status === 'loading') return <p role="status">Loading learners…</p>
  if (state.status === 'error') return <p role="alert">{state.error}</p>
  return <ul className="user-list">{state.users.map(user => <li key={user.id}>{user.name}<span>{user.email}</span></li>)}</ul>
}

export default function App() {
  const [active, setActive] = useState(0)
  const [tasks, setTasks] = useState(['Read the testing basics'])
  const [done, setDone] = useState([])
  const [filter, setFilter] = useState('')
  const [showCode, setShowCode] = useState(false)
  const topic = lessons[active]
  const lab = labs[active]
  const visibleLessons = lessons.map((lesson, index) => ({ lesson, index })).filter(({ lesson }) => lesson[0].toLowerCase().includes(filter.toLowerCase()))
  const code = examples[active]
  return <div className="layout">
    <aside className="sidebar"><div className="logo">⚛ <span>React Testing Lab</span></div><p className="course-label">BEGINNER COURSE · 16 OCT 2026</p>
      <input className="search" aria-label="Find a lesson" placeholder="Find a lesson..." value={filter} onChange={e => setFilter(e.target.value)} />
      <nav aria-label="Course lessons">{visibleLessons.map(({ lesson, index }) => <button key={lesson[0]} className={active === index ? 'active' : ''} onClick={() => setActive(index)}><span>{done.includes(index) ? '✓' : `${String(index + 1).padStart(2, '0')}`}</span>{lesson[0]}</button>)}</nav>
      <div className="progress"><b>Course progress</b><span>{done.length} / {lessons.length}</span><div><i style={{ width: `${done.length / lessons.length * 100}%` }} /></div></div>
    </aside>
    <main><header><span>Learning paths　/　React testing　/　<b>{topic[0]}</b></span><span className="badge">PRACTICE MODE</span></header>
      <article><p className="eyebrow">MODULE {String(Math.floor(active / 5) + 1).padStart(2, '0')}　·　LESSON {String(active + 1).padStart(2, '0')}</p><div className="heading"><div><h1>{topic[0]}</h1><p>{topic[1]}</p></div><span className="topic-icon">{['🧪','⚡','🔎','🖼️','👆','📝','🔀','🧩','⏳','🧵','📦','⚙️','🚀','🌿','📖'][active]}</span></div>
      <section className="panel practice-lab"><div className="panel-title"><b>✍ Practice this topic</b><small>YOUR HANDS-ON TASK</small></div><h2>{lab.task}</h2><ol>{lab.steps.map(step => <li key={step}>{step}</li>)}</ol><div className="lab-meta"><span><b>Work in:</b> <code>{lab.file}</code></span><span><b>Run/check:</b> <code>{lab.run}</code></span></div></section>      <section className="panel"><div className="panel-title"><b>How it works</b><small>FOLLOW THE FLOW →</small></div><div className="flow"><div>① &nbsp;Render a component</div><span>→</span><div>② &nbsp;Act like a user</div><span>→</span><div>③ &nbsp;Check the result</div></div></section>
      <div className="columns"><section className="panel"><div className="panel-title"><b>Interactive form</b><small>TRY IT</small></div><TaskForm onAdd={value => setTasks(current => [...current, value])} /><ul className="task-list">{tasks.map((task, i) => <li key={`${task}-${i}`}>{task}</li>)}</ul></section>
      <section className="panel"><div className="panel-title"><b>Mockable API example</b><small>LOADING / SUCCESS / ERROR</small></div><p className="muted">This list loads from a small API helper. Tests can mock that helper.</p><UserDirectory /></section></div>
      <section className="panel code-panel"><div className="panel-title"><b>{topic[0]} · complete example</b><button onClick={() => setShowCode(!showCode)}>{showCode ? 'Hide' : 'Show'} example</button></div>{showCode && <pre><code>{code}</code></pre>}<p className="muted">The examples show the basic syntax for this topic. Runnable tests are in <code>src/App.test.jsx</code>.</p></section>
      <section className="panel interview"><div className="panel-title"><b>Interview question</b><small>QUESTION + ANSWER</small></div><h2>How do you test a React form?</h2><p>Render the form, type into fields, submit it using userEvent, and check the visible result or validation message. Find inputs by their labels and buttons by their accessible names.</p></section>
      <div className="lesson-actions"><button disabled={active === 0} onClick={() => setActive(active - 1)}>← Previous</button><button className="mark" onClick={() => setDone(done.includes(active) ? done.filter(x => x !== active) : [...done, active])}>{done.includes(active) ? '✓ Completed' : 'Mark lesson complete'}</button><button disabled={active === lessons.length - 1} onClick={() => setActive(active + 1)}>Next →</button></div>
      </article></main></div>
}
