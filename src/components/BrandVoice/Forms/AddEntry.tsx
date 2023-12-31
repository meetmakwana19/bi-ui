import React from 'react';
import EntryHeader from '../../Header/EntryHeader';
import {
  Button,
  EditableTags,
  FieldLabel,
  Help,
  TextInput,
  Textarea,
} from '@contentstack/venus-components';

interface AddEntryProps {}

const AddEntry: React.FC<AddEntryProps> = () => {
  return (
    <div className='add-entry'>
      <EntryHeader />
      <form action="submit">
        <div className="field-div">
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <TextInput version="v2" width="full" required={true} placeholder="Enter a name for knowledge base" />
        </div>
        <div className="field-div">
          <FieldLabel htmlFor="description">Background description</FieldLabel>
          <Textarea version="v2" width="full" required={true} rows={5} placeholder="Enter a name for knowledge base" />
        </div>
        <div className="field-div">
          <FieldLabel htmlFor="name">
            Tags <Help text="Tags will help you find pertinent Knowledge Base entries more easily." />
          </FieldLabel>
          <EditableTags version="v2" width="full" required={true} placeholder="Select from existing tags or type to create new ones" />
        </div>
        <Button icon="" buttonType="primary" version="v2">
          Add to Knowledge Base
        </Button>
      </form>
    </div>
  );
};

export default AddEntry;
