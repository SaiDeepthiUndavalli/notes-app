// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
`
export const NotesHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 40px;
  text-align: center;
  padding: 10px;
  color: #4c63b6;
`
export const CardContainer = styled.div`
  display: flex;
  height: 40vh;
  width: 80vh;
  flex-direction: column;
  padding: 10px;
  box-shadow: 3px 3px 3px 3px #334155;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const TitleInput = styled.input`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  height: 36px;
  width: 40%;
  border: none;

  margin-bottom: 20px;
  outline: none;
`
export const TaskInput = styled.textarea`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  width: 80%;
  border: none;

  margin-bottom: 20px;
  outline: none;
`
export const AddButton = styled.button`
  align-self: flex-end;
  color: #ffffff;
  background-color: #4c63b6;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  padding: 10px 16px;
  margin-top: 10px;
  margin-bottom: 24px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
export const NotesList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  justify-content: left;
`
export const EmptyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  margin-top: 5px;
`
export const EmptyTextHeading = styled.h1`
  font-size: 20px;
  color: #1e293b;
  font-family: 'Roboto';
  padding: 5px;
  text-align: center;
`
export const EmptyTextImage = styled.img`
  height: 100px;
  width: 100px;
  padding: 10px;
`
export const EmptyTextPara = styled.p`
  font-size: 10px;
  font-family: 'Roboto';
  color: #1e293b;
  text-align: center;
  padding: 5px;
`
