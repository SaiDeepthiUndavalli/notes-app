// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  margin-top: 20px;
  list-style-type: none;
`

export const NoteContainer = styled.div`
  margin: 12px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  flex-wrap: 1;
  border: solid 0.5px #334155;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`

export const NoteText = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0px;
`

export const TaskText = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 12px;
`
