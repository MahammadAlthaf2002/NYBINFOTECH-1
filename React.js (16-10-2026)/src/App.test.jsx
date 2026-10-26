import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'
import { getUsers } from './services/userApi.js'
vi.mock('./services/userApi.js', () => ({ getUsers: vi.fn() }))

beforeEach(() => { vi.clearAllMocks(); getUsers.mockReturnValue(new Promise(() => {})) })

describe('React component testing basics', () => {
  it('renders the course heading and first lesson', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Testing basics' })).toBeInTheDocument()
    expect(screen.getByText('A component test checks what a person can see and do.')).toBeVisible()
  })
  it('renders lessons from the navigation and allows selecting one', async () => {
    const user = userEvent.setup(); render(<App />)
    await user.click(screen.getByRole('button', { name: /Vitest or Jest/ }))
    expect(screen.getByRole('heading', { name: 'Vitest or Jest' })).toBeInTheDocument()
  })
  it('filters lessons with the search field', async () => {
    const user = userEvent.setup(); render(<App />)
    await user.type(screen.getByRole('textbox', { name: 'Find a lesson' }), 'deployment')
    expect(screen.getByRole('button', { name: /Deployment preparation/ })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Vitest or Jest/ })).not.toBeInTheDocument()
  })
})

describe('user interactions and form validation', () => {
  it('shows a validation message for an empty task form', async () => {
    const user = userEvent.setup(); render(<App />)
    await user.click(screen.getByRole('button', { name: 'Add task' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a task.')
  })
  it('adds a task and clears the input', async () => {
    const user = userEvent.setup(); render(<App />)
    const input = screen.getByRole('textbox', { name: 'New practice task' })
    await user.type(input, 'Test a form')
    await user.click(screen.getByRole('button', { name: 'Add task' }))
    expect(screen.getByText('Test a form')).toBeInTheDocument()
    expect(input).toHaveValue('')
  })
  it('marks a lesson complete and updates progress', async () => {
    const user = userEvent.setup(); render(<App />)
    await user.click(screen.getByRole('button', { name: 'Mark lesson complete' }))
    expect(screen.getByRole('button', { name: '✓ Completed' })).toBeInTheDocument()
    expect(screen.getByText('1 / 15')).toBeInTheDocument()
  })
  it('shows and hides the test code example', async () => {
    const user = userEvent.setup(); render(<App />)
    await user.click(screen.getByRole('button', { name: 'Show example' }))
    expect(screen.getByText(/Hello, Mia/)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Hide example' }))
    expect(screen.queryByText(/Hello, Mia/)).not.toBeInTheDocument()
  })
})

describe('API loading, success, and error states', () => {
  it('shows loading and then displays users from the mocked API', async () => {
    let resolveRequest
    getUsers.mockReturnValueOnce(new Promise(resolve => { resolveRequest = resolve }))
    render(<App />)
    expect(screen.getByRole('status')).toHaveTextContent('Loading learners')
    resolveRequest([{ id: 1, name: 'Ari Lee', email: 'ari@example.com' }])
    expect(await screen.findByText('Ari Lee')).toBeInTheDocument()
    expect(screen.getByText('ari@example.com')).toBeInTheDocument()
  })
  it('shows a useful error when the API rejects', async () => {
    getUsers.mockRejectedValueOnce(new Error('offline'))
    render(<App />)
    expect(await screen.findByRole('alert')).toHaveTextContent('Could not load learners')
  })
})

it('keeps the lesson content accessible inside the course navigation', () => {
  render(<App />)
  const nav = screen.getByRole('navigation', { name: 'Course lessons' })
  expect(within(nav).getAllByRole('button')).toHaveLength(15)
})
