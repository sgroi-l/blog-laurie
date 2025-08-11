import { render, screen } from '@testing-library/react'
import { TagList } from '@/components/tag-list'

describe('TagList', () => {
  it('renders nothing when no tags provided', () => {
    const { container } = render(<TagList tags={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders nothing when tags is undefined', () => {
    const { container } = render(<TagList tags={undefined as any} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders tags when provided', () => {
    render(<TagList tags={['react', 'typescript', 'testing']} />)
    
    expect(screen.getByText('react')).toBeInTheDocument()
    expect(screen.getByText('typescript')).toBeInTheDocument()
    expect(screen.getByText('testing')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <TagList tags={['test']} className="custom-class" />
    )
    
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('applies correct styling classes to tags', () => {
    render(<TagList tags={['test-tag']} />)
    
    const tag = screen.getByText('test-tag')
    expect(tag).toHaveClass(
      'inline-block',
      'px-2',
      'py-1',
      'text-xs',
      'bg-gray-100',
      'dark:bg-gray-800',
      'text-gray-700',
      'dark:text-gray-300',
      'rounded-md'
    )
  })

  it('renders multiple tags with proper spacing', () => {
    const { container } = render(<TagList tags={['tag1', 'tag2', 'tag3']} />)
    
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveClass('flex', 'flex-wrap', 'gap-1')
  })
})