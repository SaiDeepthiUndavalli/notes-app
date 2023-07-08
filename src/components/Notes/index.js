import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  NotesHeading,
  CardContainer,
  Form,
  TitleInput,
  TaskInput,
  AddButton,
  EmptyTextContainer,
  EmptyTextImage,
  EmptyTextHeading,
  EmptyTextPara,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [task, setTask] = useState('')
  const [notesList, setNotesList] = useState('')

  const NonEmptyView = () => (
    <NotesList>
      {notesList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NotesList>
  )
  const EmptyView = () => (
    <EmptyTextContainer>
      <EmptyTextImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyTextHeading>No Notes Yet</EmptyTextHeading>
      <EmptyTextPara>Notes you add will appear here</EmptyTextPara>
    </EmptyTextContainer>
  )

  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeTask = event => setTask(event.target.value)

  const onAddNotes = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title,
      task,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNotes])
    setTitle('')
    setTask('')
  }

  return (
    <MainContainer>
      <NotesHeading>Notes</NotesHeading>
      <CardContainer>
        <Form onSubmit={onAddNotes}>
          <TitleInput
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <TaskInput
            placeholder="Take a Note..."
            value={task}
            onChange={onChangeTask}
          />
          <AddButton type="submit">Add</AddButton>
        </Form>
      </CardContainer>
      {notesList.length === 0 ? EmptyView() : NonEmptyView()}
    </MainContainer>
  )
}
export default Notes
