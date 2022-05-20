import { useState } from 'react';
import {
  Col,
  InputGroup,
  Form,
  FormControl,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { fetchbyQuery } from '../actions';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [department, setDepartment] = useState('');
  const [feedback, setFeedback] = useState('');

  const dispatch = useDispatch();

  const handleSelect = (query, dep, sort) => {
    setSearchQuery(query);
    setDepartment(dep);
    setFeedback(sort);

    dispatch(fetchbyQuery(query, dep, sort));
  };

  return (
    <Col md={{ span: 8, offset: 2 }}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSelect(searchQuery, department, feedback);
        }}
      >
        <InputGroup className="search mb-3 mr-3">
          <FormControl
            aria-label="Text input with dropdown button"
            placeholder="Seach By First Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
      </Form>
    </Col>
  );
};

export default SearchBar;
