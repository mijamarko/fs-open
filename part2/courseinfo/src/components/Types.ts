export type ContentProps = {
  items: PartProps[]
}

export type PartProps = {
  name: string
  exercises: number
  id?: number
}

export type HeaderProps = {
  course: string
}

export type CourseProps = {
  name: string
  id: number
  parts: PartProps[]
}