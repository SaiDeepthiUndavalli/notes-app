import {ListItem, NoteContainer, NoteText, TaskText} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, task} = noteDetails

  return (
    <>
      <ListItem>
        <NoteContainer>
          <NoteText>{title}</NoteText>
          <TaskText>{task}</TaskText>
        </NoteContainer>
      </ListItem>
    </>
  )
}

export default NoteItem
