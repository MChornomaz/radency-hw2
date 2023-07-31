export type Categories = 'Task' | 'Random Thought' | 'Idea' | 'Quote'

export interface Note {
  id: string
  name: string
  created: string
  category: string
  content: string
  dates: string[]
  archived: boolean
}

export interface StatisticNote {
  category: string
  active: number
  archived: number
}
