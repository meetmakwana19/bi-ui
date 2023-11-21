import React from 'react'
import '../UserTone.css';
import ToneEntryHeader from '../../Header/ToneEntryHeader';
import { Button, EditableTags, FieldLabel, Help, TextInput, Textarea } from '@contentstack/venus-components';

const AddUserToneForm = () => {
  
    return (
      <div className='user-tone-entry'>
        <ToneEntryHeader />
        <form action="submit">
          <div className="tone-field-div">
            <FieldLabel className='tone-content-padding' htmlFor="name">Title</FieldLabel>
            <TextInput version="v2" width="full" required={true} placeholder="Type something..." />
          </div>
          <div className="tone-field-div">
            <FieldLabel className='tone-content-padding' htmlFor="description">Edit User Tone <Help text="Below are the key insights Contentstack Intelligence has extracted about your Tone from the provided content" /></FieldLabel>
            <Textarea version="v2" width="full" name="description" id="vinayak" testId="omsai" required={true} placeholder="Enter a name for knowledge base" />
          </div>
          <div className="tone-field-div">
            <FieldLabel className='tone-content-padding' htmlFor="name">Tags <Help text="Tags will help you find pertinent Knowledge Base entries more easily." /></FieldLabel>
            <EditableTags version="v2" width="full" required={true} placeholder="Add some tags" />
          </div>
          <Button buttonType="primary" version="v2" >
            Add User Tone
          </Button>
    
        </form>
      </div>
    )
}

export default AddUserToneForm


